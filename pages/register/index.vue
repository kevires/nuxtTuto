<template>
    <section class="page">
        <div class="card card-form">
            <div class="card_body">
                <h3 class="text_center">Register</h3>
                <form @submit.prevent="onSubmit">
                    <div class="form_group">
                        <label for="email">Email</label>
                        <input id="email" v-model="email" type="text" placeholder="example@gmail.com"
                            class="form_control">
                    </div>
                    <div class="form_group">
                        <label for="password">Password</label>
                        <input id="password" v-model="password" type="password" placeholder="Please enter password"
                            class="form_control">
                    </div>
                    <div class="form_group">
                        <label for="re-password">Re-password</label>
                        <input id="re-password" v-model="rePassword" type="password" placeholder="Please enter password"
                            class="form_control">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn_success btn-submit">
                            Register
                        </button>
                    </div>
                </form>
                <div class="other text_center">
                    <span>Have your account ?
                        <nuxt-link to="/login">Login here</nuxt-link>
                    </span>
                </div>
            </div>

        </div>

    </section>
</template>


<script>
export default {
    layout: 'auth',
    data() {
        return {
            email: '',
            password: '',
            rePassword: ''
        }
    },
    methods: {
        checkValidPassword() {
            return this.password === this.rePassword
        },
        onSubmit() {
            const validPassword = this.checkValidPassword()
            if (validPassword) {
                this.$store.dispatch("authenticateUser", {
                    email: this.email,
                    password: this.password,
                    isLogin: false
                }).then((result) => {
                    if (result.success) {
                        this.$router.push('/decks')
                    }
                })
            } else {
                console.log('Password is not valid')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    justify-content: center;
    padding-top: 100px;

    .card-form {
        width: 500px;
    }

    .btn-submit {
        width: 100%;
    }
}
</style>