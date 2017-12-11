<template>

    <div class="layout-page-category">

        <pull-down-up>

            <div>
                <flexbox>
                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-zhibo"></use>
                            </svg>
                            <span>直播</span>
                        </div>
                    </flexbox-item>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-fanju"></use>
                            </svg>
                            <span>番剧</span>
                        </div>
                    </flexbox-item>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-shipin"></use>
                            </svg>
                            <span>视频</span>
                        </div>
                    </flexbox-item>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-guochandonghua"></use>
                            </svg>
                            <span>国产</span>
                        </div>
                    </flexbox-item>

                </flexbox>

                <flexbox>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-yinle"></use>
                            </svg>
                            <span>音乐</span>
                        </div>
                    </flexbox-item>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-wudao"></use>
                            </svg>
                            <span>舞蹈</span>
                        </div>
                    </flexbox-item>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-youxi"></use>
                            </svg>
                            <span>游戏</span>
                        </div>
                    </flexbox-item>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-keji"></use>
                            </svg>
                            <span>科技</span>
                        </div>
                    </flexbox-item>

                </flexbox>

                <flexbox>
                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-shenghuo"></use>
                            </svg>
                            <span>生活</span>
                        </div>
                    </flexbox-item>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-guixu"></use>
                            </svg>
                            <span>鬼畜</span>
                        </div>
                    </flexbox-item>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-shishang"></use>
                            </svg>
                            <span>时尚</span>
                        </div>
                    </flexbox-item>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-guanggao"></use>
                            </svg>
                            <span>广告</span>
                        </div>
                    </flexbox-item>
                </flexbox>

                <flexbox>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-yule"></use>
                            </svg>
                            <span>娱乐</span>
                        </div>
                    </flexbox-item>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-yingshi"></use>
                            </svg>
                            <span>影视</span>
                        </div>
                    </flexbox-item>

                    <flexbox-item :span="3" class="flexcenter">
                        <div>
                            <svg class="icon iconfont category_icon" aria-hidden="true">
                                <use xlink:href="#icon-dianying"></use>
                            </svg>
                            <span>电影</span>
                        </div>
                    </flexbox-item>

                </flexbox>

            </div>

        </pull-down-up>

        <layout-nav></layout-nav>

    </div>

</template>


<script>
    import {Flexbox, FlexboxItem} from 'vux'

    import Layout from '../components/Layout.vue'
    import PullDownUp from '../components/PullUpDown.vue'
    import LayoutNav from "../components/LayoutNav.vue";

    export default {
        name: 'category',
        components: {
            LayoutNav,
            Layout,
            PullDownUp,
            Flexbox,
            FlexboxItem
        },
        methods: {}
    }
</script>

<style lang="less">
    @import '~vux/src/styles/1px.less';

    .category_icon {
        width: .75rem;
        height: .75rem;
        display: block;
    }

    .flexcenter {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: .2rem 0;
        margin-left: 0 !important;
    }

    .flexcenter div {
        text-align: center
    }

    .flexcenter span {
        padding: .2rem 0;
        display: block;
        font-size: .2rem;
    }
</style>

