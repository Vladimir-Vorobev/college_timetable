<template>
    <div class="main container">
        <select class="custom-select custom-select-sm mb-3 events" onchange="location.href=this.value">
            <option value="/groups-list">Список групп</option>
            <option value="/teachers-list" selected>Список учителей</option>
            <option value="/classrooms-list">Список аудиторий</option>
        </select>
        <div class="list">
            <div class="name"><a href="teacher-timetable">Иванов Иван Иванович</a></div>
            <div class="name"><a href="teacher-timetable">Иванов Иван Иванович</a></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TeachersList',
    
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