<template>

    <div class="layout-page-member">

        <div class="member-header">

            <div class="member-header-h1">

                <div class="member-header-item">
                    <svg class="icon iconfont member-header-icon c1" aria-hidden="true">
                        <use xlink:href="#icon-saoma"></use>
                    </svg>
                </div>

                <div class="member-header-item">
                    <svg class="icon iconfont member-header-icon c1" aria-hidden="true">
                        <use xlink:href="#icon-erweima"></use>
                    </svg>
                </div>

                <div class="member-header-item">
                    <svg class="icon iconfont member-header-icon c1" aria-hidden="true">
                        <use xlink:href="#icon-shezhi"></use>
                    </svg>
                </div>

            </div>

            <div class="member-header-h2">
                <div class="left">

                    <svg class="icon iconfont c1 col_icon" aria-hidden="true">
                        <use xlink:href="#icon-touxiangbeijing"></use>
                    </svg>

                    <div class="head_pic">
                        <img src="../assets/images/head.jpg"/>
                    </div>

                </div>

                <div class="middle">
                    <div class="middle-h1">
                        <div class="inline-block">晨陌不语</div>
                        <svg class="icon iconfont c1 col_icon icon-lv" aria-hidden="true">-->
                            <use xlink:href="#icon-lv4"></use>
                        </svg>
                    </div>

                    <div class="middle-h2">
                        <span>正式会员</span>
                    </div>

                    <div class="middle-h3">
                        <span>硬币：288</span>
                        <span>B币：288</span>
                    </div>

                </div>

                <div class="right">
                    <svg class="icon iconfont c1" aria-hidden="true">
                        <use xlink:href="#icon-jiantou"></use>
                    </svg>
                </div>

            </div>

        </div>

        <div class="member-content col_content">

            <p class="member-content-title">个人中心</p>

            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-lixianzhongxin"></use>
                </svg>
                <p>离线缓存</p>
            </div>
            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-lishijilu"></use>
                </svg>
                <p>历史记录</p>
            </div>
            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-wodeshoucang"></use>
                </svg>
                <p>我的收藏</p>
            </div>
            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-guanzhu"></use>
                </svg>
                <p>我的关注</p>
            </div>
            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-shaohouzaikan"></use>
                </svg>
                <p>稍后再看</p>
            </div>
            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-qianbao"></use>
                </svg>
                <p>B币钱包</p>
            </div>
            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-xuanzezhuti"></use>
                </svg>
                <p>主题选择</p>
            </div>

            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-default"></use>
                </svg>
                <p>&nbsp;</p>
            </div>

        </div>

        <hr class="member-hr"/>

        <div class="member-content col_content">

            <p class="member-content-title">我的服务</p>

            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-youxizhongxin"></use>
                </svg>
                <p>游戏中心</p>
            </div>

            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-wodedahuiyuan"></use>
                </svg>
                <p>大会员</p>
            </div>

            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-default"></use>
                </svg>
                <p>&nbsp;</p>
            </div>

            <div class="col_item border-1px-tl">
                <svg class="icon iconfont col_icon" aria-hidden="true">
                    <use xlink:href="#icon-default"></use>
                </svg>
                <p>&nbsp;</p>
            </div>

        </div>


        <layout-nav></layout-nav>

    </div>

</template>

<script>
    import Layout from '../components/Layout.vue'
    import LayoutNav from "../components/LayoutNav.vue"

    export default {
        name: 'member',
        components: {
            LayoutNav,
            Layout,
        },
        methods: {}
    }
</script>

<style lang="less">
    @import "../assets/less/views/member.less";
</style>

