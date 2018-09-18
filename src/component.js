import { BaseModule, mapActions, mapGetters } from './lib/BaseModule';

class Component extends BaseModule {
    constructor () {
        super();
        this.setProps([]);
        this.setComponent({});
        this.setMethod({
            ...mapActions(['hideToast']),
            setContentLayoutSize () {
                this.$nextTick(() => {
                    let el = this.$el.querySelector('.content');
                    if (el) {
                        let style = el.style;
                        style.marginLeft = `${(this.windowWidth - el.offsetWidth) / 2}px`;
                        this.isShowContent = true;
                    }
                });
            }
        });
        this.setCompute({
            ...mapGetters({
                windowHeight: 'windowHeight',
                windowWidth: 'windowWidth',
                toastOptions: 'toastOptions'
            })
        });
        this.setWatch({
            toastOptions (options) {
                options = options || {};
                let self = this;
                let isShow = self.isShow = options.isShow || false;
                let duration = Math.min(Math.max(options.duration || 1000, 300), 60000);
                self.content = options.content || '';
                let timerId = self.timerId;
                if (timerId) {
                    clearTimeout(timerId);
                }
                if (isShow) {
                    self.setContentLayoutSize();
                    self.timerId = setTimeout(() => {
                        self.hideToast();
                        self.isShowContent = false;
                    }, duration);
                } else {
                    self.hideToast();
                    self.isShowContent = false;
                }
            }
        });
    }

    getData () {
        return {
            isShow: false,
            content: '',
            timerId: null,
            isShowContent: false,
            defaultWidth: '',
            defaultHeight: ''
        };
    }

    onCreate () {
        let app = this.app;
        app.defaultWidth = window.innerWidth;
        app.defaultHeight = window.innerHeight;
    }

    onMount () {
    }
}

module.exports = Component;
