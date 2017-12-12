<template>

    <div class="layout-page-member">

        <div class="member-header bc6">

            <div class="member-header-item">
                <svg class="icon iconfont member-header-icon c6" aria-hidden="true">
                    <use xlink:href="#icon-saoma"></use>
                </svg>
            </div>

            <div class="member-header-item">
                <svg class="icon iconfont member-header-icon c6" aria-hidden="true">
                    <use xlink:href="#icon-erweima"></use>
                </svg>
            </div>

            <div class="member-header-item">
                <svg class="icon iconfont member-header-icon c6" aria-hidden="true">
                    <use xlink:href="#icon-shezhi"></use>
                </svg>
            </div>

        </div>

        <div class="member-content">

            <!--<div class="category_item">-->
            <!--<svg class="icon iconfont category_icon" aria-hidden="true">-->
            <!--<use xlink:href="#icon-zhibo"></use>-->
            <!--</svg>-->
            <!--<p>直播</p>-->
            <!--</div>-->

        </div>


        <layout-nav></layout-nav>

    </div>

</template>

<script>
    import Layout from '../components/Layout.vue'
    import LayoutNav from "../components/LayoutNav.vue";

    export default {
        name: 'member',
        components: {
            LayoutNav,
            Layout,
        },
        methods:{
        }
    }
</script>

<style>
    .member-header{
        text-align: right;
        padding: 0 .2rem;
    }
    .member-header-item{
        display: inline-block;
        text-align: center;
        padding: .15rem 0;
        margin-left: .3rem;
    }
    .member-header-icon {
        width: .5rem;
        height: .5rem;
    }
</style>

