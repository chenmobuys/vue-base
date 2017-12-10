<template>

    <div class="layout-nav">

        <tabbar>
            <tabbar-item link="/" :selected="this.path == '/'">
                <i slot="icon" class="icon iconfont icon-shouyeweixuanzhong"></i>
                <i slot="icon-active" class="icon iconfont icon-shouyexuanzhong" ></i>
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item link="category" :selected="this.path == '/category'">
                <i slot="icon" class="icon iconfont icon-fenquweixuanzhong"></i>
                <i slot="icon-active" class="icon iconfont icon-fenquxuanzhong" ></i>
                <span slot="label">分区</span>
            </tabbar-item>
            <tabbar-item link="/moment" :selected="this.path == '/moment'" badge="2">
                <i slot="icon" class="icon iconfont icon-dongtaiweixuanzhong"></i>
                <i slot="icon-active" class="icon iconfont icon-dongtaixuanzhong" ></i>
                <span slot="label">动态</span>
            </tabbar-item>
            <tabbar-item link="/message" :selected="this.path == '/message'">
                <i slot="icon" class="icon iconfont icon-ic_tab_xiaoxi"></i>
                <i slot="icon-active" class="icon iconfont icon-ic_tab_xiaoxi_xuanzhong" ></i>
                <span slot="label">消息</span>
            </tabbar-item>
            <tabbar-item link="/member" :selected="this.path == '/member'">
                <i slot="icon" class="icon iconfont icon-wodeweixuanzhong"></i>
                <i slot="icon-active" class="icon iconfont icon-wodexuanzhong" ></i>
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>

    </div>

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
