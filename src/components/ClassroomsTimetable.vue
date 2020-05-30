<template>
    <div class="main container">
        <select class="custom-select custom-select-sm mb-3 events" onchange="location.href=this.value">
            <option value="/groups-timetable">Расписание групп</option>
            <option value="/teachers-timetable">Расписание учителей</option>
            <option value="/classrooms-timetable" selected>Расписание аудиторий</option>
        </select>
        <div class="list">
            <router-link class="name" :to="'/classrooms-timetable/' + item.classroom.replace(/([/]+)/g, '*')" v-for="item in classrooms" :key="item.classroom">
                <div class="name_group">Аудитория {{ item.classroom }} </div>
            </router-link> 
        </div>
    </div>
</template>

<script>

export default {
    name: 'ClassroomsTimetable',
    data(){
        let classrooms = []
        fetch('http://37.228.118.76:3001/api2/getClassroomData', {
            method: 'get',
        })
        .then(response => {
            console.log("res", response)
            return response.json()
        })
        .then(data => {
            for(let i = 0; i < data.length; i++){
                classrooms.push({classroom: data[i]})
            }
        })
        return{
            classrooms
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
.list a{
    text-decoration: none;
    color: #2c3e50 !important;
}
.list a:hover{
    text-decoration: none;
    color: #FF5722 !important;
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