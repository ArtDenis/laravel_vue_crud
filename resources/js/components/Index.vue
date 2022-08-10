<template>
    <div class="container">
        <nav>
            <router-link v-if="accessToken" :to="{ name: 'cabinet.index' }">Личный кабинет</router-link>
            <router-link v-if="accessToken" :to="{ name: 'get.index' }">Получить данные</router-link>
            <router-link v-if="!accessToken" :to="{ name: 'user.login' }">Вход</router-link>
            <router-link v-if="!accessToken" :to="{ name: 'user.registration' }">Регистрация</router-link>
            <a v-if="accessToken" @click.prevent="logout" href="#">Выход</a>
        </nav>
        <div class="row justify-content-center">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                accessToken: ""
            }
        },
        mounted() {
            this.getToken()
        },
        //тут мы обновляем так как этот компонент статичный
        updated() {
            this.getToken()
        },
        methods: {
            getToken() {
                this.accessToken = localStorage.getItem('token');
            },
            logout() {
                axios.post('/api/logout').then( responce => {
                    localStorage.removeItem('token');
                    this.$router.push({name: "user.login"});
                }).catch( error => {
                    console.log('ты чо э ты чо');
                })
            }
        }
    }
</script>
