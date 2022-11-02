<template>
    <div>
        <default-header-vue/>
        <Nuxt />
        <default-footer-vue/>
    </div>
</template>


<script>
    import DefaultHeaderVue from '../components/Header/DefaultHeader.vue';
    import DefaultFooterVue from '../components/Footer/DefaultFooter.vue';
    export default{
        components:{
            DefaultHeaderVue,
            DefaultFooterVue
        }
    }
</script>