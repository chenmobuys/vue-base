<template>

    <div class="layout-page-index main pb_a">

        <header class="flex index-head">

            <div class="index-head-left">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-bilibili"></use>
                </svg>
            </div>

            <div class="index-head-middle">
                <tab class="tab" :line-width=2 active-color="#fff" v-model="index">
                    <tab-item class="vux-center tab-item" :selected="demo2 === item" v-for="(item,index) in list2"
                              @click="demo2 = item" :key="index">{{item}}
                    </tab-item>
                </tab>

            </div>

            <div class="index-head-right">
                <svg class="icon iconfont" aria-hidden="true">
                    <use xlink:href="#icon-fangdajing"></use>
                </svg>
            </div>

        </header>

        <swiper class="index-content" height="100%" v-model="index" :show-dots="false">
            <swiper-item v-for="(item, index) in list2" :key="index">

                <div v-if="index == 0">
                    1
                </div>

                <div v-else-if="index==1">

                    <figure class="flex">
                        <figcaption>
                            综合
                        </figcaption>

                        <figcaption>
                            <span>
                                <svg class="icon iconfont" aria-hidden="true">
                                    <use xlink:href="#icon-paihangbang"></use>
                                </svg>
                                <span>排行榜</span>
                            </span>

                                        <span>
                                <svg class="icon iconfont" aria-hidden="true">
                                    <use xlink:href="#icon-biaoqian"></use>
                                </svg>
                                <span>标签</span>
                            </span>

                        </figcaption>
                    </figure>

                </div>

                <div v-else></div>


                <div class="tab-swiper vux-center">

                    <pull-down-up @on-scroll="onScroll">

                        <div>11112312</div>

                    </pull-down-up>

                </div>
            </swiper-item>
        </swiper>


        <layout-nav></layout-nav>

    </div>

</template>

<script>
    import PullDownUp from '../components/PullUpDown.vue'
    import LayoutNav from "../components/LayoutNav.vue";

    import {Tab, TabItem, Swiper, SwiperItem} from 'vux';

    const list = () => ['精选', '美食', '电影', '酒店', '外卖']

    export default {
        name: 'index',
        data() {
            return {
                list2: list(),
                demo2: '美食',
                index: 0,
                demo04_list: list()
            }
        },
        components: {
            LayoutNav,
            PullDownUp,
            Tab,
            TabItem,
            Swiper,
            SwiperItem
        },
        methods: {
            onScroll(msg){
                console.log(msg)
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/less/views/index.less";
</style>

