<template>

    <div class="layout-page-category">

        <pull-down-up>

<div class="category_box">

                <div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-zhibo"></use>
                    </svg>
                    <p>直播</p>
                </div><!--

                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-fanju"></use>
                    </svg>
                    <p>番剧</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-donghua"></use>
                    </svg>
                    <p>动画</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-guochandonghua"></use>
                    </svg>
                    <p>国产</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-yinle"></use>
                    </svg>
                    <p>音乐</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-wudao"></use>
                    </svg>
                    <p>舞蹈</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-youxi"></use>
                    </svg>
                    <p>游戏</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-keji"></use>
                    </svg>
                    <p>科技</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-shenghuo"></use>
                    </svg>
                    <p>生活</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-guixu"></use>
                    </svg>
                    <p>鬼畜</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-shishang"></use>
                    </svg>
                    <p>时尚</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-guanggao"></use>
                    </svg>
                    <p>广告</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-yule"></use>
                    </svg>
                    <p>娱乐</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-yingshi"></use>
                    </svg>
                    <p>影视</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-jilupian"></use>
                    </svg>
                    <p>记录片</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-dianying"></use>
                    </svg>
                    <p>电影</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-dianshiju"></use>
                    </svg>
                    <p>电视剧</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-fangyingting"></use>
                    </svg>
                    <p>放映厅</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-xiaoshipin"></use>
                    </svg>
                    <p>小视频</p>
                </div><!--
                    
                --><div class="category_item">
                    <svg class="icon iconfont category_icon" aria-hidden="true">
                            <use xlink:href="#icon-zhuanlan"></use>
                    </svg>
                    <p>专栏</p>
                </div>

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
    .category_box{
        padding: .2rem 0;
    }

    .category_item{
        width: 25%;
        display: inline-block;
        text-align: center;
        padding: .15rem 0;
    }

    .category_item p{
        padding:  .2rem 0;
        font-size: .2rem;
    }

    .category_icon {
        width: .75rem;
        height: .75rem;
    }


</style>

