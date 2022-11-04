<template>
    <main class="main">
        <h3>
            General setiing
        </h3>

    </main>

</template>

<script>
export default {
  middleware: ['auth', 'check-auth']
}
</script>


<style lang="scss">
.main {
    margin-left: 3rem;
}
</style>