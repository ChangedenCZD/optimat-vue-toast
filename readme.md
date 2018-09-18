# Toast提示
## 使用方式（Usage）
### 安装（Install）
``
npm install optimat-vue-toast -save
``

### 导入（Import）
#### *.js
```javascript
import {mapActions, mapGetters} from 'vuex';
import ToastLayout from 'optimat-vue-toast'
```
#### *.vue
```vue
<script>
    import ToastLayout from 'optimat-vue-toast'
    import {mapActions, mapGetters} from 'vuex';
    {
        methods: {
            ...mapActions(['showToast']),
            action () {
                this.showToast('content' || {content:'message', duration:1000});
            }
        }
    }
</script>
```
### 标签（Target）
#### *vue
```html
<ToastLayout></ToastLayout>
```

### 引入Vuex（Use Vuex）
[如何引入Vuex](https://vuex.vuejs.org/zh-cn/)
#### actions.js
```js
export const showToast = ({commit}, options) => {
  commit(SHOW_TOAST, options);
};
export const hideToast = ({commit}) => {
  commit(HIDE_TOAST);
};
```
#### getters.js
```js
export const toastOptions = state => state.toastOptions;
```
#### index.js
```js
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
Vue.use(Vuex);
const TOAST_DEFAULT_OPTIONS = {
  isShow: false,
  content: '请稍等...',
  duration: 1000
};
let state = {
  toastOptions: TOAST_DEFAULT_OPTIONS
};
let mutations = {
  [SHOW_TOAST] (state, options) {
    let defaultOptions;
    if (typeof options === 'string') {
      defaultOptions = clone(TOAST_DEFAULT_OPTIONS);
      defaultOptions.content = options;
    } else {
      defaultOptions = clone(options || TOAST_DEFAULT_OPTIONS);
    }
    defaultOptions.isShow = true;
    state.toastOptions = defaultOptions;
  },
  [HIDE_TOAST] (state) {
    state.toastOptions = TOAST_DEFAULT_OPTIONS;
  }
};
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
});
// clone 方法请查看 optimat-vue-utils 中的 ObjectSupport 工具
```

| Options         | Type     | Description                 | Default |
|-----------------|:--------:|:---------------------------:|:--------:|
| content  | string | 显示内容 | 60000 |
| duration  | number | 显示时长（ms），为300~60000之间 | 1000 |