<template>

    <div class="layout-page-member">

        <pull-down-up>

            <div>{{this.$route.name}}</div>

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

