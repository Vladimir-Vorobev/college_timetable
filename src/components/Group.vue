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
            <h3>Расписание группы {{group}}</h3>
            <div>
                <div class="card-header name-day">
                    Понедельник
                </div>
                <div class="card-body" v-for="(item, index) in timetable1" :key="item.day.value">
                    <div class="lesson" v-if="item.day.nameF != null && item.day.nameS != null">
                        <div class="row">
                            <div class="col-7">{{index + 1}} <span class="time">{{item.day.time}}</span></div>
                            <div class="col-5">
                                <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12"> 
                                <span class="lesson_name">{{item.day.nameF}}</span>
                                <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12" style="text-align: end; padding-right: 30px;">
                                <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <span class="lesson_name">{{item.day.nameS}}</span>
                                <span class="square square-2" data-tooltip="Четная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="lesson" v-else>
                        <div class="row">
                            <div class="col-7">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                            <div class="col-5" v-if="item.day.name != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroom}}</a></div>
                            <div class="col-5" v-if="item.day.nameF != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a></div>
                            <div class="col-5" v-if="item.day.nameS != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a></div>
                        </div>
                        <div class="row">
                            <div class="col-12" v-if="item.day.name != null"> 
                                <span class="lesson_name">{{item.day.name}}</span>
                                <span class="square square-0" data-tooltip="Еженедельно"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacher}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.nameF != null"> 
                                <span class="lesson_name">{{item.day.nameF}}</span>
                                <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.nameS != null"> 
                                <span class="lesson_name">{{item.day.nameS}}</span>
                                <span class="square square-2" data-tooltip="Четная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.name == null && item.day.nameF == null && item.day.nameS == null"> 
                                <span class="lesson_name">Окно</span>
                                <span class="square square-0" data-tooltip="Еженедельно"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-header name-day">
                    Вторник
                </div>
                <div class="card-body" v-for="(item, index) in timetable2" :key="item.day.value">
                    <div class="lesson" v-if="item.day.nameF != null && item.day.nameS != null">
                        <div class="row">
                            <div class="col-7">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                            <div class="col-5">
                                <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12"> 
                                <span class="lesson_name">{{item.day.nameF}}</span>
                                <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12" style="text-align: end; padding-right: 30px;">
                                <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <span class="lesson_name">{{item.day.nameS}}</span>
                                <span class="square square-2" data-tooltip="Четная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="lesson" v-else>
                        <div class="row">
                            <div class="col-7">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                            <div class="col-5" v-if="item.day.name != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroom}}</a></div>
                            <div class="col-5" v-if="item.day.nameF != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a></div>
                            <div class="col-5" v-if="item.day.nameS != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a></div>
                        </div>
                        <div class="row">
                            <div class="col-12" v-if="item.day.name != null"> 
                                <span class="lesson_name">{{item.day.name}}</span>
                                <span class="square square-0" data-tooltip="Еженедельно"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacher}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.nameF != null"> 
                                <span class="lesson_name">{{item.day.nameF}}</span>
                                <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.nameS != null"> 
                                <span class="lesson_name">{{item.day.nameS}}</span>
                                <span class="square square-2" data-tooltip="Четная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.name == null && item.day.nameF == null && item.day.nameS == null"> 
                                <span class="lesson_name">Окно</span>
                                <span class="square square-0" data-tooltip="Еженедельно"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-header name-day">
                    Среда
                </div>
                <div class="card-body" v-for="(item, index) in timetable3" :key="item.day.value">
                    <div class="lesson" v-if="item.day.nameF != null && item.day.nameS != null">
                        <div class="row">
                            <div class="col-7">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                            <div class="col-5">
                                <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12"> 
                                <span class="lesson_name">{{item.day.nameF}}</span>
                                <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12" style="text-align: end; padding-right: 30px;">
                                <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <span class="lesson_name">{{item.day.nameS}}</span>
                                <span class="square square-2" data-tooltip="Четная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="lesson" v-else>
                        <div class="row">
                            <div class="col-7">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                            <div class="col-5" v-if="item.day.name != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroom}}</a></div>
                            <div class="col-5" v-if="item.day.nameF != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a></div>
                            <div class="col-5" v-if="item.day.nameS != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a></div>
                        </div>
                        <div class="row">
                            <div class="col-12" v-if="item.day.name != null"> 
                                <span class="lesson_name">{{item.day.name}}</span>
                                <span class="square square-0" data-tooltip="Еженедельно"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacher}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.nameF != null"> 
                                <span class="lesson_name">{{item.day.nameF}}</span>
                                <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.nameS != null"> 
                                <span class="lesson_name">{{item.day.nameS}}</span>
                                <span class="square square-2" data-tooltip="Четная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.name == null && item.day.nameF == null && item.day.nameS == null"> 
                                <span class="lesson_name">Окно</span>
                                <span class="square square-0" data-tooltip="Еженедельно"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-header name-day">
                    Четверг
                </div>
                <div class="card-body" v-for="(item, index) in timetable4" :key="item.day.value">
                    <div class="lesson" v-if="item.day.nameF != null && item.day.nameS != null">
                        <div class="row">
                            <div class="col-7">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                            <div class="col-5">
                                <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12"> 
                                <span class="lesson_name">{{item.day.nameF}}</span>
                                <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12" style="text-align: end; padding-right: 30px;">
                                <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <span class="lesson_name">{{item.day.nameS}}</span>
                                <span class="square square-2" data-tooltip="Четная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="lesson" v-else>
                        <div class="row">
                            <div class="col-7">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                            <div class="col-5" v-if="item.day.name != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroom}}</a></div>
                            <div class="col-5" v-if="item.day.nameF != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a></div>
                            <div class="col-5" v-if="item.day.nameS != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a></div>
                        </div>
                        <div class="row">
                            <div class="col-12" v-if="item.day.name != null"> 
                                <span class="lesson_name">{{item.day.name}}</span>
                                <span class="square square-0" data-tooltip="Еженедельно"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacher}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.nameF != null"> 
                                <span class="lesson_name">{{item.day.nameF}}</span>
                                <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.nameS != null"> 
                                <span class="lesson_name">{{item.day.nameS}}</span>
                                <span class="square square-2" data-tooltip="Четная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.name == null && item.day.nameF == null && item.day.nameS == null"> 
                                <span class="lesson_name">Окно</span>
                                <span class="square square-0" data-tooltip="Еженедельно"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-header name-day">
                    Пятница
                </div>
                <div class="card-body" v-for="(item, index) in timetable5" :key="item.day.value">
                    <div class="lesson" v-if="item.day.nameF != null && item.day.nameS != null">
                        <div class="row">
                            <div class="col-7">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                            <div class="col-5">
                                <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12"> 
                                <span class="lesson_name">{{item.day.nameF}}</span>
                                <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12" style="text-align: end; padding-right: 30px;">
                                <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <span class="lesson_name">{{item.day.nameS}}</span>
                                <span class="square square-2" data-tooltip="Четная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="lesson" v-else>
                        <div class="row">
                            <div class="col-7">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                            <div class="col-5" v-if="item.day.name != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroom}}</a></div>
                            <div class="col-5" v-if="item.day.nameF != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a></div>
                            <div class="col-5" v-if="item.day.nameS != null"><a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a></div>
                        </div>
                        <div class="row">
                            <div class="col-12" v-if="item.day.name != null"> 
                                <span class="lesson_name">{{item.day.name}}</span>
                                <span class="square square-0" data-tooltip="Еженедельно"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacher}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.nameF != null"> 
                                <span class="lesson_name">{{item.day.nameF}}</span>
                                <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.nameS != null"> 
                                <span class="lesson_name">{{item.day.nameS}}</span>
                                <span class="square square-2" data-tooltip="Четная неделя"></span>
                                <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                            </div>
                            <div class="col-12" v-if="item.day.name == null && item.day.nameF == null && item.day.nameS == null"> 
                                <span class="lesson_name">Окно</span>
                                <span class="square square-0" data-tooltip="Еженедельно"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- PC -->
        <div class="container d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <h3 style="text-align: center;">Расписание группы {{group}}</h3>

            <div class="card day">
                <div class="card-header name-day">
                    Понедельник
                </div>
                <div class="card-body" v-for="(item, index) in timetable1" :key="item.day.value">
                    <div class="row lesson" v-if="item.day.nameF != null && item.day.nameS != null">
                        <div class="col-4 col-md-4">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                        <div class="col-5 col-md-6">
                            <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                            <span class="lesson_name">{{item.day.nameF}}</span>
                            <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            <span class="square square-2" data-tooltip="Четная неделя"></span>
                            <span class="lesson_name">{{item.day.nameS}}</span>
                            <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                        </div>
                        <div class="col-3 col-md-2"> 
                            <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a><br> 
                            <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a>
                        </div>
                    </div>
                    <div class="row  lesson" v-else>
                        <div class="col-4">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                        <div class="col-6" v-if="item.day.name != null">
                            <span class="square square-0" data-tooltip="Еженедельно"></span>
                            <span class="lesson_name">{{item.day.name}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacher}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.nameF != null">
                            <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                            <span class="lesson_name">{{item.day.nameF}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacherF}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.nameS != null">
                            <span class="square square-2" data-tooltip="Четная неделя"></span>
                            <span class="lesson_name">{{item.day.nameS}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacherS}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.name == null && item.day.nameF == null && item.day.nameS == null">
                            <span class="square square-0" data-tooltip="Еженедельно"></span>
                            <span class="lesson_name">Окно</span>
                        </div>
                        <div class="col-2" v-if="item.day.name != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroom">каб. {{item.day.classroom}}</router-link> </div>
                        <div class="col-2" v-if="item.day.nameF != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroomF">каб. {{item.day.classroomF}}</router-link> </div>
                        <div class="col-2" v-if="item.day.nameS != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroomS">каб. {{item.day.classroomS}}</router-link> </div>
                    </div>
                </div>
            </div>
            <div class="card day">
                <div class="card-header name-day">
                    Вторник
                </div>
                <div class="card-body" v-for="(item, index) in timetable2" :key="item.day.value">
                    <div class="row lesson" v-if="item.day.nameF != null && item.day.nameS != null">
                        <div class="col-4 col-md-4">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                        <div class="col-5 col-md-6">
                            <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                            <span class="lesson_name">{{item.day.nameF}}</span>
                            <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            <span class="square square-2" data-tooltip="Четная неделя"></span>
                            <span class="lesson_name">{{item.day.nameS}}</span>
                            <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                        </div>
                        <div class="col-3 col-md-2"> 
                            <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a><br> 
                            <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a>
                        </div>
                    </div>
                    <div class="row  lesson" v-else>
                        <div class="col-4">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                        <div class="col-6" v-if="item.day.name != null">
                            <span class="square square-0" data-tooltip="Еженедельно"></span>
                            <span class="lesson_name">{{item.day.name}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacher}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.nameF != null">
                            <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                            <span class="lesson_name">{{item.day.nameF}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacherF}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.nameS != null">
                            <span class="square square-2" data-tooltip="Четная неделя"></span>
                            <span class="lesson_name">{{item.day.nameS}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacherS}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.name == null && item.day.nameF == null && item.day.nameS == null">
                            <span class="square square-0" data-tooltip="Еженедельно"></span>
                            <span class="lesson_name">Окно</span>
                        </div>
                        <div class="col-2" v-if="item.day.name != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroom">каб. {{item.day.classroom}}</router-link> </div>
                        <div class="col-2" v-if="item.day.nameF != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroomF">каб. {{item.day.classroomF}}</router-link> </div>
                        <div class="col-2" v-if="item.day.nameS != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroomS">каб. {{item.day.classroomS}}</router-link> </div>
                    </div>
                </div>
            </div>
            <div class="card day">
                <div class="card-header name-day">
                    Среда
                </div>
                <div class="card-body" v-for="(item, index) in timetable3" :key="item.day.value">
                    <div class="row lesson" v-if="item.day.nameF != null && item.day.nameS != null">
                        <div class="col-4 col-md-4">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                        <div class="col-5 col-md-6">
                            <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                            <span class="lesson_name">{{item.day.nameF}}</span>
                            <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            <span class="square square-2" data-tooltip="Четная неделя"></span>
                            <span class="lesson_name">{{item.day.nameS}}</span>
                            <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                        </div>
                        <div class="col-3 col-md-2"> 
                            <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a><br> 
                            <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a>
                        </div>
                    </div>
                    <div class="row  lesson" v-else>
                        <div class="col-4">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                        <div class="col-6" v-if="item.day.name != null">
                            <span class="square square-0" data-tooltip="Еженедельно"></span>
                            <span class="lesson_name">{{item.day.name}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacher}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.nameF != null">
                            <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                            <span class="lesson_name">{{item.day.nameF}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacherF}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.nameS != null">
                            <span class="square square-2" data-tooltip="Четная неделя"></span>
                            <span class="lesson_name">{{item.day.nameS}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacherS}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.name == null && item.day.nameF == null && item.day.nameS == null">
                            <span class="square square-0" data-tooltip="Еженедельно"></span>
                            <span class="lesson_name">Окно</span>
                        </div>
                        <div class="col-2" v-if="item.day.name != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroom">каб. {{item.day.classroom}}</router-link> </div>
                        <div class="col-2" v-if="item.day.nameF != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroomF">каб. {{item.day.classroomF}}</router-link> </div>
                        <div class="col-2" v-if="item.day.nameS != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroomS">каб. {{item.day.classroomS}}</router-link> </div>
                    </div>
                </div>
            </div>
            <div class="card day">
                <div class="card-header name-day">
                    Четверг
                </div>
                <div class="card-body" v-for="(item, index) in timetable4" :key="item.day.value">
                    <div class="row lesson" v-if="item.day.nameF != null && item.day.nameS != null">
                        <div class="col-4 col-md-4">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                        <div class="col-5 col-md-6">
                            <span data-toggle="tooltip" class="square square-2" data-placement="top" data-title="Нечетная неделя"></span>
                            <span class="lesson_name">{{item.day.nameF}}</span>
                            <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            <span class="square square-2" data-tooltip="Четная неделя"></span>
                            <span class="lesson_name">{{item.day.nameS}}</span>
                            <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                        </div>
                        <div class="col-3 col-md-2"> 
                            <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a><br>
                            <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a>
                        </div>
                    </div>
                    <div class="row  lesson" v-else>
                        <div class="col-4">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                        <div class="col-6" v-if="item.day.name != null">
                            <span class="square square-0" data-tooltip="Еженедельно"></span>
                            <span class="lesson_name">{{item.day.name}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacher}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.nameF != null">
                            <div class="row  lesson">
                                <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                                <span class="lesson_name">{{item.day.nameF}}</span>
                                <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacherF}}</a></p>
                            </div>
                        </div>
                        <div class="col-6" v-if="item.day.nameS != null">
                            <span class="square square-2" data-tooltip="Четная неделя"></span>
                            <span class="lesson_name">{{item.day.nameS}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacherS}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.name == null && item.day.nameF == null && item.day.nameS == null">
                            <span class="square square-0" data-tooltip="Еженедельно"></span>
                            <span class="lesson_name">Окно</span>
                        </div>
                        <div class="col-2" v-if="item.day.name != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroom">каб. {{item.day.classroom}}</router-link> </div>
                        <div class="col-2" v-if="item.day.nameF != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroomF">каб. {{item.day.classroomF}}</router-link> </div>
                        <div class="col-2" v-if="item.day.nameS != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroomS">каб. {{item.day.classroomS}}</router-link> </div>
                    </div>
                </div>
            </div>
            <div class="card day">
                <div class="card-header name-day">
                    Пятница
                </div>
                <div class="card-body" v-for="(item, index) in timetable5" :key="item.day.value">
                    <div class="row lesson" v-if="item.day.nameF != null && item.day.nameS != null">
                        <div class="col-4 col-md-4">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                        <div class="col-5 col-md-6">
                            <span data-toggle="tooltip" class="square square-2" data-placement="top" data-title="Нечетная неделя"></span>
                            <span class="lesson_name">{{item.day.nameF}}</span>
                            <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherF}}</a></p>
                            <span class="square square-2" data-tooltip="Четная неделя"></span>
                            <span class="lesson_name">{{item.day.nameS}}</span>
                            <p class="teacher"><a class="s_link" href="teacher-timetable">{{item.day.teacherS}}</a></p>
                        </div>
                        <div class="col-3 col-md-2"> 
                            <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomF}}</a><br>
                            <a class="s_link" href="classroom-timetable">каб. {{item.day.classroomS}}</a>
                        </div>
                    </div>
                    <div class="row  lesson" v-else>
                        <div class="col-4">{{index + 1}}<span class="time">{{item.day.time}}</span></div>
                        <div class="col-6" v-if="item.day.name != null">
                            <span class="square square-0" data-tooltip="Еженедельно"></span>
                            <span class="lesson_name">{{item.day.name}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacher}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.nameF != null">
                            <span class="square square-1" data-tooltip="Нечетная неделя"></span>
                            <span class="lesson_name">{{item.day.nameF}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacherF}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.nameS != null">
                            <span class="square square-2" data-tooltip="Четная неделя"></span>
                            <span class="lesson_name">{{item.day.nameS}}</span>
                            <p class="teacher"><a class="s_link" href="teachers-timetable">{{item.day.teacherS}}</a></p>
                        </div>
                        <div class="col-6" v-if="item.day.name == null && item.day.nameF == null && item.day.nameS == null">
                            <span class="square square-0" data-tooltip="Еженедельно"></span>
                            <span class="lesson_name">Окно</span>
                        </div>
                        <div class="col-2" v-if="item.day.name != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroom">каб. {{item.day.classroom}}</router-link> </div>
                        <div class="col-2" v-if="item.day.nameF != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroomF">каб. {{item.day.classroomF}}</router-link> </div>
                        <div class="col-2" v-if="item.day.nameS != null"> <router-link class="s_link" :to="'/groups-timetable/' + item.day.classroomS">каб. {{item.day.classroomS}}</router-link> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import needle from 'needle'
export default {
    name: 'Group',
    data(){
        let timetable1 = []
        let timetable2 = []
        let timetable3 = []
        let timetable4 = []
        let timetable5 = []
        let group = this.$route.params.id
        group = group.replace(group[group.lastIndexOf('*')], '/')
        needle.post('http://37.228.118.76:3001/api2/getGroup', {group: group}, {"json": true}, function(err, res){
            if(err) throw err
            else{
                for(let i = 0; i < 5; i++){
                    timetable1.push({day: res.body.day[0][i]})
                }
                for(let i = 0; i < 5; i++){
                    timetable2.push({day: res.body.day[1][i]})
                }
                for(let i = 0; i < 5; i++){
                    timetable3.push({day: res.body.day[2][i]})
                }
                for(let i = 0; i < 5; i++){
                    timetable4.push({day: res.body.day[3][i]})
                }
                for(let i = 0; i < 5; i++){
                    timetable5.push({day: res.body.day[4][i]})
                }
            }
        })
        return{
            group,
            timetable1,
            timetable2,
            timetable3,
            timetable4,
            timetable5,
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
        margin-top: 1.2em;
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