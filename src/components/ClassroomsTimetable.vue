<template>
    <div class="main container">
        <select class="custom-select custom-select-sm mb-3 events" onchange="location.href=this.value">
            <option value="/groups-timetable">Расписание групп</option>
            <option value="/teachers-timetable">Расписание учителей</option>
            <option value="/classrooms-timetable" selected>Расписание аудиторий</option>
        </select>
    </div>
</template>

<script>

export default {
    name: 'ClassroomsTimetable',
    
}
</script>

<style scoped>
.main{
    padding-top: 110px !important;
}
</style>