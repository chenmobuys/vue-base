<template>

    <div class="layout-page-index">

        <layout>

            <header class="flex layout-head">

                <div>test</div>

                <div class="layout-head-middle">
                    <tab :line-width=2 active-color='#fc378c' v-model="index">
                        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item,index) in list2"
                                  @click="demo2 = item" :key="index">{{item}}
                        </tab-item>
                    </tab>

                </div>

                <div>test</div>

            </header>

            <swiper height="100%" class="layout-content" v-model="index"  :show-dots="false" >
                <swiper-item v-for="(item, index) in list2" :key="index">
                    <div class="tab-swiper vux-center">

                        <pull-down-up @on-scroll="onScroll">

                            <div>11</div>

                        </pull-down-up>

                    </div>
                </swiper-item>
            </swiper>


        </layout>

        <!--<layout-nav></layout-nav>-->

    </div>

</template>

<script>
    import Layout from '../components/Layout.vue'
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
            }
        },
        components: {
            LayoutNav,
            Layout,
            PullDownUp,
            Tab,
            TabItem,
            Swiper,
            SwiperItem
        },
        methods:{
            onScroll(msg){
                console.log(msg)
            }
        }
    }
</script>

