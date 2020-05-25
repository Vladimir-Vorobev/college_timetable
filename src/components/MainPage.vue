<template>
    <div class="main container">
        <div class="name">Test</div>
        <h1>{{ userPhrase || 'Тут пока пусто' }}</h1>
		<input type="text" @input="(e) => changeUserPhrase(e.target.value)" /><br><br><br>
        <button @click="incrementCount()">Посчитать клики</button>
        <div>{{ buttonCount }}</div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'MainPage',
    computed: { ...mapGetters(['buttonCount', 'userPhrase']) },
    methods: {
        ...mapActions(['changeUserPhrase', 'incrementCount']),
    },
}
</script>

<style scoped>

</style>