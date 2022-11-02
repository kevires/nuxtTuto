<template>
    <div class="c_3">
        <div class="card">
            <div class="front-card">
                <img :src="picture">
            </div>
            <div class="back-card">
                {{ keyword }}
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            keyword:{
                type: String,
                required: true
            },
            picture:{
                type: String,
                required: true
            }
        }
    }
</script>