<template>
    <div class="main container">
        <select class="custom-select custom-select-sm mb-3 events" onchange="location.href=this.value">
            <option value="/groups-timetable" selected>Список групп</option>
            <option value="/teachers-timetable">Список учителей</option>
            <option value="/classrooms-timetable">Список аудиторий</option>
        </select>
        <!--Mobile-->
        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none list">
                <div class="grade row">
                    <span class="num_grade col-12">1 курс</span>
                    <div class="name_group col-12">t1</div>
                    <div class="name_group col-12">t1</div>
                </div>
                <div class="grade row">
                    <span class="num_grade col-12">2 курс</span>
                    <div class="name_group col-12">t1</div>
                </div>
                <div class="grade row">
                    <span class="num_grade col-12">3 курс</span>
                    <div class="name_group col-12">t1</div>
                </div>
                <div class="grade row">
                    <span class="num_grade col-12">4 курс</span>
                    <div class="name_group col-12">t1</div>
                </div>
        </div>
        <!-- PC -->
        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block list">
            <div class="row">
                <div class="grade col-3">
                    <span class="num_grade">1 курс</span>
                    <div class="name_group">t1</div>
                    <div class="name_group">t1</div>
                </div>
                <div class="grade col-3">
                    <span class="num_grade">2 курс</span>
                    <div class="name_group">t1</div>
                </div>
                <div class="grade col-3">
                    <span class="num_grade">3 курс</span>
                    <div class="name_group">t1</div>
                </div>
                <div class="grade col-3">
                    <span class="num_grade">4 курс</span>
                    <div class="name_group">t1</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'GroupsTimetable',
    
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
</style>