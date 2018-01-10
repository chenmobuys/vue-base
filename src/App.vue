<template>
    <div id="app">
        <loading v-model="isLoading"></loading>
        <router-view/>
    </div>
</template>

<script>
    import {Loading} from 'vux'
    import {mapState} from 'vuex'

    export default {
        name: 'app',
        components: {
            Loading
        },
        computed: {
            ...mapState({
                isLoading: state => state.vux.isLoading
            })
        }
    }
</script>

<style>
    @import "./assets/less/less.less";

</style>

