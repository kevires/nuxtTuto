<template>
    <div>
        <default-header-vue/>
        <Nuxt />
    </div>
</template>


<script>
    import DefaultHeaderVue from '../components/Header/DefaultHeader.vue';
    export default{
        components:{
            DefaultHeaderVue
        }
    }
</script>