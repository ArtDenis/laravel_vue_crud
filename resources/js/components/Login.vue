<template>
    <div class="w-25">
        <div>
            <input v-model="email" type="email" class="form-control mb-3" placeholder="E-mail" required>
        </div>
        <div>
            <input v-model="password" type="password" class="form-control mb-3" placeholder="Пароль" required>
        </div>
        <div>
            <input @click.prevent="login" type="submit" class="btn btn-outline-primary" value="Войти">
        </div>
        <div class="text-danger" v-if="error">
            {{this.error}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",
                error: ""
            }
        },
        methods: {
            login() {
                axios.get('/sanctum/csrf-cookie').then(res => {
                    axios.post('/api/login', {
                        email: this.email,
                        password: this.password
                    }).then( ans => {
                        console.log(ans.response);
                        if (ans.config.headers['X-XSRF-TOKEN']) {
                            localStorage.setItem('token', ans.config.headers['X-XSRF-TOKEN']);
                            this.$router.push({ name: 'cabinet.index' });
                        } else {
                            localStorage.removeItem('token');
                            alert('эээээээээ')
                        }

                    }).catch( error => {
                        this.error = error.response.data.message
                    })
                });
            }
        }
    }
</script>

<style scoped>

</style>