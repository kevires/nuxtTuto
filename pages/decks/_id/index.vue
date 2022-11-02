<template>
    <h1>
        Your decks {{ $route.params.id }} is activated
    </h1>
</template>


<script>
export default {
    validate({params}) {
        return /^[0-9]{9,12}$/.test(params.id)
    }
}
</script>