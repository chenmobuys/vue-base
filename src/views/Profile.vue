<template>

    <layout :title="this.$route.params.id"></layout>

</template>

<script>
    import Layout from '../components/Layout.vue'

    export default {
        name: 'profile',
        components: {
            Layout
        }
    }
</script>

