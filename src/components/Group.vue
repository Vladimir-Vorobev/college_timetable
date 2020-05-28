<template>
    <div class="main container">
        
    </div>
</template>

<script>

export default {
    name: 'Group',
    mounted(){
        console.log(this.$route.params.id)
    }
    
}
</script>

<style scoped>
.main{
    padding-top: 110px !important;
}
</style>