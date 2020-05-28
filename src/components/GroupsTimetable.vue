<template>
    <div class="main container">
        <select class="custom-select custom-select-sm mb-3 events" onchange="location.href=this.value">
            <option value="/groups-timetable" selected>Расписание групп</option>
            <option value="/teachers-timetable">Расписание учителей</option>
            <option value="/classrooms-timetable">Расписание аудиторий</option>
        </select>
        <!--<router-link :to="'/groups-timetable/' + item.group" v-for="item in groups" :key="item.group" class="group_link">
            Группа {{ item.group }}
        </router-link> -->
        <!--Mobile-->
        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none list">
                <div class="grade row">
                    <span class="num_grade col-12">1 курс</span>
                    <router-link style="width: 100%;" class="group_link" :to="'/groups-timetable/' + item.group" v-for="item in groups1" :key="item.group">
                        <div class="name_group"> Группа {{ item.group }} </div>
                    </router-link> 
                </div>
                <div class="grade row">
                    <span class="num_grade col-12">2 курс</span>
                    <router-link style="width: 100%;" class="group_link" :to="'/groups-timetable/' + item.group" v-for="item in groups2" :key="item.group">
                        <div class="name_group"> Группа {{ item.group }} </div>
                    </router-link> 
                </div>
                <div class="grade row">
                    <span class="num_grade col-12">3 курс</span>
                    <router-link style="width: 100%;" class="group_link" :to="'/groups-timetable/' + item.group" v-for="item in groups3" :key="item.group">
                        <div class="name_group"> Группа {{ item.group }} </div>
                    </router-link> 
                </div>
                <div class="grade row">
                    <span class="num_grade col-12">4 курс</span>
                    <router-link style="width: 100%;" class="group_link" :to="'/groups-timetable/' + item.group" v-for="item in groups4" :key="item.group">
                        <div class="name_group"> Группа {{ item.group }} </div>
                    </router-link> 
                </div>
        </div>
        <!-- PC -->
        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block list">
            <div class="row">
                <div class="grade col-3">
                    <span class="num_grade">1 курс</span>
                    <router-link style="width: 100%;" class="group_link" :to="'/groups-timetable/' + item.group" v-for="item in groups1" :key="item.group">
                        <div class="name_group"> Группа {{ item.group }} </div>
                    </router-link> 
                </div>
                <div class="grade col-3">
                    <span class="num_grade">2 курс</span>
                   <router-link style="width: 100%;" class="group_link" :to="'/groups-timetable/' + item.group" v-for="item in groups2" :key="item.group">
                        <div class="name_group"> Группа {{ item.group }} </div>
                    </router-link> 
                </div>
                <div class="grade col-3">
                    <span class="num_grade">3 курс</span>
                    <router-link style="width: 100%;" class="group_link" :to="'/groups-timetable/' + item.group" v-for="item in groups3" :key="item.group">
                        <div class="name_group"> Группа {{ item.group }} </div>
                    </router-link> 
                </div>
                <div class="grade col-3">
                    <span class="num_grade">4 курс</span>
                    <router-link style="width: 100%;" class="group_link" :to="'/groups-timetable/' + item.group" v-for="item in groups4" :key="item.group">
                        <div class="name_group"> Группа {{ item.group }} </div>
                    </router-link> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'GroupsTimetable',
    data(){
        return{
            groups1: [
                { group: '1.1' },
                { group: '2.1' },
                { group: '3.1' },
                { group: '4.1' },
                { group: '5.1' },
            ],
            groups2: [
                { group: '1.2' },
                { group: '2.2' },
                { group: '3.2' },
                { group: '4.2' },
                { group: '5.2' },
            ],
            groups3: [
                { group: '1.3' },
                { group: '2.3' },
                { group: '3.3' },
                { group: '4.3' },
                { group: '5.3' },
            ],
            groups4: [
                { group: '1.4' },
                { group: '2.4' },
                { group: '3.4' },
                { group: '4.4' },
                { group: '5.4' },
            ]
        }
    },
    
}
</script>

<style scoped>
.main{
    padding-top: 110px !important;
    min-height: 100vh;
}
@media (max-width: 992px) {  
    .grade{
        margin-bottom: 1em;
        margin-left: 0.1em;
        margin-right: 0.1em;
    }
    .num_grade{
        font-weight: 600;
        padding-bottom: 0.3em;
    }
}
@media (min-width: 993px) {  
    .num_grade{
        font-weight: 600;
    }
}

.list{
    margin-top: 1em;
    font-size: 1.3em;
}
.grade{
    text-align: center;
}
.name_group{
    border: 1.5px solid #555;
    margin-bottom: 5px;
}
.group_link{
    text-decoration: none;
    color: #2c3e50;
}
.name_group:hover{
    text-decoration: none;
    background-color: #e0e0e0;
}
</style>