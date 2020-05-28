<template>
    <div class="main container">
        <select class="custom-select custom-select-sm mb-3 events" onchange="location.href=this.value">
            <option value="/groups-timetable">Расписание групп</option>
            <option value="/teachers-timetable" selected>Расписание учителей</option>
            <option value="/classrooms-timetable">Расписание аудиторий</option>
        </select>
        <div class="list">
            <div class="name"><a href="#">Иванов Иван Иванович</a></div>
            <div class="name"><a href="#">Иванов Иван Иванович</a></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TeachersTimetable',
    
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