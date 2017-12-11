<template>

    <div class="layout-page-member">

        <pull-down-up>

            <article>
  <h1>Internet Explorer 9</h1>
  <p>Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月 14 日发布.....</p>
</article>

        </pull-down-up>

        <layout-nav></layout-nav>

        

    </div>

</template>

<script>
    import Layout from '../components/Layout.vue'
    import PullDownUp from '../components/PullUpDown.vue'
    import LayoutNav from "../components/LayoutNav.vue";

    export default {
        name: 'moment',
        components: {
            LayoutNav,
            Layout,
            PullDownUp
        },
        methods:{
        }
    }
</script>

