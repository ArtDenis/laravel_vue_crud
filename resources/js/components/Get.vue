<template>
    <table class="table">
        <thead>
        <tr>
            <td scope="col">#</td>
            <td scope="col">Название</td>
            <td scope="col">Цена</td>
        </tr>
        </thead>
        <tbody v-if="fruits">
            {{fruits}}
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "Get",
        data() {
            return {
                fruits: ""
            }
        },
        mounted() {
            this.getFruits();
        },
        methods: {
            getFruits() {
                /*
                axios.get('/api/auth/fruits/', {
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('access_token')}`
                    }
                }).then( responce => {
                    this.fruits = responce.data.data;
                }).catch( error => {
                    console.log('ты чо э ты чо');
                })
                */
                axios.get('/api/get').then( responce => {
                    //console.log(responce);
                    this.fruits = responce.data;
                }).catch( error => {
                    console.log('ты чо э ты чо');
                })
            }
        }
    }
</script>

<style scoped>

</style>