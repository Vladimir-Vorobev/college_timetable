<template>
    <div class="main container">
        <select class="custom-select custom-select-sm mb-3 events" onchange="location.href=this.value">
            <option value="/groups-timetable" selected>Расписание групп</option>
            <option value="/teachers-timetable">Расписание учителей</option>
            <option value="/classrooms-timetable">Расписание аудиторий</option>
        </select>
        <router-link :to="'/groups-timetable/' + item.group" v-for="item in groups" :key="item.group">
            Группа {{ item.group }}
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'GroupsTimetable',
    data(){
        return{
            groups: [
                { group: '1' },
                { group: '2' },
                { group: '3' },
                { group: '4' },
                { group: '5' },
            ]
        }
    },
    
}
</script>

<style scoped>
.main{
    padding-top: 110px !important;
}
</style>