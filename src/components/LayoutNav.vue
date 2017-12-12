<template>

    <tabbar>
        <tabbar-item link="/" :selected="this.path == '/'">

            <svg slot="icon" class="icon iconfont nav_icon" aria-hidden="true">
                <use xlink:href="#icon-shouyeweixuanzhong"></use>
            </svg>

            <svg slot="icon-active" class="icon iconfont nav_icon" aria-hidden="true">
                <use xlink:href="#icon-shouyexuanzhong"></use>
            </svg>

            <span slot="label">首页</span>

        </tabbar-item>

        <tabbar-item link="category" :selected="this.path == '/category'">

            <svg slot="icon" class="icon iconfont nav_icon" aria-hidden="true">
                <use xlink:href="#icon-fenquweixuanzhong"></use>
            </svg>

            <svg slot="icon-active" class="icon iconfont nav_icon" aria-hidden="true">
                <use xlink:href="#icon-fenquxuanzhong"></use>
            </svg>

            <span slot="label">分区</span>

        </tabbar-item>

        <tabbar-item link="/moment" :selected="this.path == '/moment'" badge="2">

            <svg slot="icon" class="icon iconfont nav_icon" aria-hidden="true">
                <use xlink:href="#icon-dongtaiweixuanzhong"></use>
            </svg>

            <svg slot="icon-active" class="icon iconfont nav_icon" aria-hidden="true">
                <use xlink:href="#icon-dongtaixuanzhong"></use>
            </svg>

            <span slot="label">动态</span>

        </tabbar-item>
        <tabbar-item link="/message" :selected="this.path == '/message'">

            <svg slot="icon" class="icon iconfont nav_icon" aria-hidden="true">
                <use xlink:href="#icon-ic_tab_xiaoxi"></use>
            </svg>

            <svg slot="icon-active" class="icon iconfont nav_icon" aria-hidden="true">
                <use xlink:href="#icon-ic_tab_xiaoxi_xuanzhong"></use>
            </svg>

            <span slot="label">消息</span>

        </tabbar-item>
        <tabbar-item link="/member" :selected="this.path == '/member'">

            <svg slot="icon" class="icon iconfont nav_icon" aria-hidden="true">
                <use xlink:href="#icon-wodeweixuanzhong"></use>
            </svg>

            <svg slot="icon-active" class="icon iconfont nav_icon" aria-hidden="true">
                <use xlink:href="#icon-wodexuanzhong"></use>
            </svg>

            <span slot="label">我的</span>

        </tabbar-item>
    </tabbar>

</template>

<script>

    import {Tabbar, TabbarItem} from 'vux'

    export default {
        name: 'layout-nav',
        data() {
            return {
                path: this.$route.path
            }
        },
        components: {
            Tabbar,
            TabbarItem
        }
    }
</script>

<style lang="less">
    .nav_icon {
        width: .5rem;
        height: .5rem;
    }

    /*div[class^="layout-page-"] {
        height: 100% - 47px;
        margin: 0 0 5% 0;
    }*/
</style>
