<template>
    <div>
        <br>
        <br>
        <br>
        <h4>
            Личный кабинет пользователя
        </h4>
        <div v-if="user">
            ID: {{user.id}} <br>
            Имя: {{user.name}} <br>
            Email: {{user.email}} <br>
            Создан: {{user.created_at}} <br>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cabinet",
        data() {
            return {
                user: []
            }
        },
        mounted() {
            this.getUser();
        },
        methods: {
            getUser() {
                axios.get('/api/user').then(res => {
                    this.user = res.data;
                });
            }
        }
    }


</script>

<style scoped>

</style>