<template>
    <div class="main container">
        <div class="name">Test</div>
        <button @click="getInfo()">Получить информацию</button>
    </div>
</template>

<script>

import { mapGetters} from 'vuex'
export default {
    name: 'Test',
    computed: { ...mapGetters(['buttonCount', 'userPhrase']) },
    methods: {
        getInfo(){
            console.log(this.$store.getters.buttonCount)
            console.log(SessionID)
        }
    }
}
</script>

<style scoped>

</style>