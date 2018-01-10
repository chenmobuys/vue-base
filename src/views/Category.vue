<template>

    <div class="layout-page-category">

        <div class="category-content f0 flexwrap">

            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-zhibo"></use>
                </svg>
                <p>直播</p>
            </div>

            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-fanju"></use>
                </svg>
                <p>番剧</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-donghua"></use>
                </svg>
                <p>动画</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-guochandonghua"></use>
                </svg>
                <p>国产</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-yinle"></use>
                </svg>
                <p>音乐</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-wudao"></use>
                </svg>
                <p>舞蹈</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-youxi"></use>
                </svg>
                <p>游戏</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-keji"></use>
                </svg>
                <p>科技</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-shenghuo"></use>
                </svg>
                <p>生活</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-guixu"></use>
                </svg>
                <p>鬼畜</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-shishang"></use>
                </svg>
                <p>时尚</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-guanggao"></use>
                </svg>
                <p>广告</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-yule"></use>
                </svg>
                <p>娱乐</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-yingshi"></use>
                </svg>
                <p>影视</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-jilupian"></use>
                </svg>
                <p>记录片</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-dianying"></use>
                </svg>
                <p>电影</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-dianshiju"></use>
                </svg>
                <p>电视剧</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-fangyingting"></use>
                </svg>
                <p>放映厅</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-xiaoshipin"></use>
                </svg>
                <p>小视频</p>
            </div>
            <div class="icon-content">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-zhuanlan"></use>
                </svg>
                <p>专栏</p>
            </div>

        </div>

        <layout-nav></layout-nav>

    </div>

</template>


<script>
    import LayoutNav from "../components/LayoutNav.vue";

    export default {
        name: 'category',
        components: {
            LayoutNav
        },
        methods: {}
    }
</script>

<style lang="less">
    @import "../assets/less/views/category";
</style>


