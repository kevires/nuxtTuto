<template>
    <div class="ct">
      <h1>Profile</h1>
      <button class="btn btn_danger" @click="onLogout">
        Logout
      </button>
    </div>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
  methods:{
    onLogout(){
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>