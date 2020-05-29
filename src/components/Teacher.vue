<!--  
    еженедельно:
    <span class="square square-0" data-tooltip="Еженедельно"></span>

    четная неделя:
    <span class="square square-2" data-tooltip="Четная неделя"></span>

    нечетная неделя:
    <span class="square square-1" data-tooltip="Нечетная неделя"></span>
-->

<template>
    <div class="main">
        <!--Mobile-->
        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none">
            <h3>{{teacher}}</h3>
            <div class="card day">
                <div class="card-header name-day">
                    Понедельник
                </div>
                <div class="card-body">
                    <div class="lesson">
                        <div class="row">
                            <div class="col-7">1 <span class="time">8:30-9:15</span></div>
                            <div class="col-5"><a class="s_link" href="classroom-timetable">каб. 206</a></div>
                        </div>
                        <div class="row">
                            <div class="col-12"> 
                                <span class="lesson_name">Информатика</span>
                                <span class="square square-2" data-tooltip="Четная неделя"></span>
                                <p class="teacher"><a class="s_link" href="group-timetable">ИС-21/9</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- PC -->
        <div class="container d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <h3 style="text-align: center;">{{teacher}}</h3>
            <div class="card day">
                <div class="card-header name-day">
                    Понедельник
                </div>
                <div class="card-body">
                    <div class="row  lesson">
                        <div class="col-4 col-md-4">1 <span class="time">8:30-9:15</span></div>
                        <div class="col-5 col-md-6">
                            <span class="square square-2" data-tooltip="Четная неделя"></span>
                            <span class="lesson_name">Информатика</span>
                            <p class="teacher"><a class="s_link" href="group-timetable">ИС-21/9</a></p>
                        </div>
                        <div class="col-3 col-md-2"> <a class="s_link" href="classroom-timetable">каб. 206</a> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import needle from 'needle'
export default {
    name: 'Teacher',
    data(){
        needle.post('http://37.228.118.76:3001/api2/getTeacher', {teacher: this.$route.params.id}, {"json": true}, function(err, res){
            if(err) throw err
            else{
                console.log(res.body)
            }
        })
        return{
            teacher: this.$route.params.id
        }
    },
}
</script>

<style scoped>
@import '/assets/styles/tooltip.css';

.main{
    padding-top: 110px !important;
    min-height: 100vh;
}
@media (max-width: 992px) {  
    .day{
        font-size: 1.2em;
        margin-top: 1em;
    }
    .name-day{
        font-size: 1.4em;
        text-align: center;
        font-weight: 600;
    }
    .lesson{
        min-height: 1em;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
    }
    .lesson_name{
        font-weight: 500;
        font-size: 1.25em;
    }
    .teacher{
        font-size: 0.8em;
    }
    .time{
        color: #6c6d6f;
        padding-left: 0.2em;
    }
    .square{
        margin-left: 5px;
        margin-bottom: 2px;
    }
}
@media (min-width: 993px) {  
    .day{
        font-size: 1.3em;
        margin-top: 1em;
    }
    .name-day{
        font-size: 1.5em;
        text-align: center;
        font-weight: 600;
    }
    .lesson{
        min-height: 1.5em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
    .lesson_name{
        font-weight: 500;
    }
    .teacher{
        font-size: 0.7em;
    }
    .time{
        color: #6c6d6f;
        padding-left: 0.2em;
    }
    .square{
        margin-right: 5px;
        margin-bottom: 2px;
    }
}

.s_link{
    text-decoration: none;
    color: black;
}
.s_link:hover{
    text-decoration: none;
    color: #FF5722;
}

.square {
    background: #FF5722;
    display: inline-block;
    width: 16px;
    height: 16px;
    left: 1px;
    position: relative;
    vertical-align: middle;
    outline: 1px solid #FF5722;
}
.square.square-2 {
    border-right: 16px solid #FF5722;
    border-top: 16px solid #fff;
}
.square.square-1 {
    border-top: 16px solid #FF5722;
    border-right: 16px solid #fff;
}
</style>