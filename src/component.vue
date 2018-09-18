<template>
    <section class="component-layout ui-optimat-vue-toast-layout fix lt0"
             :style="{maxHeight:(windowHeight||defaultHeight)+'px',width:(windowWidth||defaultWidth)+'px'}"
             v-show="isShow">
        <div class="content fix lb0" :style="{opacity:isShowContent?1:0}">
            <span>{{content}}</span>
        </div>
    </section>
</template>

<script>
    const Component = require('./component');
    export default new Component();
</script>

<style lang="scss" scoped="true">
    /*根字体*/
    @media (min-width: 1025px) {
        html {
            font-size: 28px;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        html {
            font-size: 24px;
        }
    }

    @media (min-width: 376px) and (max-width: 768px) {
        html {
            font-size: 22px;
        }
    }

    @media (min-width: 321px) and (max-width: 375px) {
        html {
            font-size: 20px;
        }
    }

    @media (max-width: 320px) {
        html {
            font-size: 18px;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        position: relative;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    html, body {
        width: 100%;
        overflow-x: hidden;
        background-color: #ededed;
    }

    /**px转rem*/
    $fontbase: 32px;
    @function rem($px) {
        @return $px / $fontbase * 1rem;
    }

    /**字体大小*/
    $fontSizeNano: rem(18px);
    $fontSizeMini: rem(19px);
    $fontSizeSmall: rem(20px);
    $fontSizeNormal: rem(22px);
    $fontSizeMiddle: rem(24px);
    $fontSizeLarge: rem(26px);

    * {
        font-size: $fontSizeNormal;
    }

    .fix {
        position: fixed;
    }

    .lt0 {
        left: 0;
        top: 0;
    }

    .lb0 {
        left: 0;
        bottom: 0;
    }

    .ui-optimat-vue-toast-layout {
        .content {
            padding: rem(10px) rem(20px);
            display: inline-block;
            background-color: rgba(0, 0, 0, .7);
            margin-bottom: rem(40px);
            border-radius: 3px;
            text-align: center;
            min-width: rem(100px);
            max-width: 60%;
            span {
                letter-spacing: 1px;
                word-break: normal;
                width: auto;
                display: block;
                white-space: pre-wrap;
                word-wrap: break-word;
                font-size: $fontSizeMiddle;
                color: white;
            }
            -webkit-transition: opacity 0.3s ease-in-out;
            -moz-transition: opacity 0.3s ease-in-out;
            -o-transition: opacity 0.3s ease-in-out;
            transition: opacity 0.3s ease-in-out;
        }
    }
</style>
