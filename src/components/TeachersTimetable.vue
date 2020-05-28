<template>
    <div class="main container">
        <select class="custom-select custom-select-sm mb-3 events" onchange="location.href=this.value">
            <option value="/groups-timetable">Расписание групп</option>
            <option value="/teachers-timetable" selected>Расписание учителей</option>
            <option value="/classrooms-timetable">Расписание аудиторий</option>
        </select>
        <div class="list">
            <router-link class="name" :to="'/teachers-timetable/' + item.teacher" v-for="item in teachers" :key="item.teacher">
                <div class="name_group">{{ item.teacher }} </div>
            </router-link> 
        </div>
    </div>
</template>

<script>

export default {
    name: 'TeachersTimetable',
    data(){
        return{
            teachers:[
                { teacher: 'Иванов И.И.' },
                { teacher: 'Петров К.А.' },
                { teacher: 'Волков Д.П.' },
                { teacher: 'Жукова О.В.' },
                { teacher: 'Варшавская А.Л.' },
            ]
        }
    }
}
</script>

<style scoped>
.main{
    padding-top: 110px !important;
    min-height: 100vh;
}
.list{
    margin-top: 1em;
    font-size: 1.3em;
}
.name{
    margin-bottom: 1em;
}
.name a{
    text-decoration: none;
    color: #2c3e50;
}
.name a:hover{
    text-decoration: none;
    color: #FF5722;
}
</style>