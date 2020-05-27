<template>
    <div class="main container">
        <form style="font-size: 1.3em;">
            <div class="form-group">
                <label for="exampleFormControlFile1">Добавить расписание</label>
                <input type="file" class="form-control-file" id="input">
            </div>
            <button type="submit" class="btn btn-primary btn-lg">Отправить</button>
        </form>
    </div>
</template>

<script>
import readXlsxFile from 'read-excel-file'
export default {
    name: 'Test',
    mounted(){
        const input = document.getElementById('input')

        input.addEventListener('change', () => {
            readXlsxFile(input.files[0]).then((rows) => {
                let classArr = []
                for(let i = 3; i < rows[0].length; i += 5){
                    let classNumber = {
                        class: rows[0][i],
                        mon: [{},{},{},{},{}],
                        tue: [{},{},{},{},{}],
                        wed: [{},{},{},{},{}],
                        thur: [{},{},{},{},{}],
                        fri: [{},{},{},{},{}],
                    }
                    classArr.push(classNumber)
                }
                rows = rows.slice(1)
                let n = classArr.length
                let s = -1
                let days = ['mon', 'tue', 'wed', 'thur', 'fri']
                for(let k = 0; k < 50; k += 2){
                    for(let j = 0; j < n; j++){
                        for(let g = 0; g < 5; g++){
                            classArr[j][days[g]][0].time = rows[0][2]
                            classArr[j][days[g]][1].time = rows[2][2]
                            classArr[j][days[g]][2].time = rows[4][2]
                            classArr[j][days[g]][3].time = rows[6][2]
                            classArr[j][days[g]][4].time = rows[8][2]
                        }
                    }
                    try{
                        let r = 0
                        let d = Math.floor(k / 10)
                        if(s == 4) s = 0
                        else s += 1
                        for(let h = 3; h < rows[1].length; h += 5){
                            if(rows[k][h] == '-'){
                                classArr[r][days[d]][s].nameS = rows[k][h + 1]
                                classArr[r][days[d]][s].teacherS = rows[k + 1][h + 1]
                                classArr[r][days[d]][s].classroomS = rows[k][h + 2]
                            }
                            else if(rows[k][h + 1] == '-'){
                                classArr[r][days[d]][s].nameF = rows[k][h]
                                classArr[r][days[d]][s].teacherF = rows[k + 1][h]
                                classArr[r][days[d]][s].classroomF = rows[k][h + 2] 
                            }
                            else if(rows[k][h] != null && rows[k][h + 1] != null){
                                classArr[r][days[d]][s].nameS = rows[k][h + 1]
                                classArr[r][days[d]][s].teacherS = rows[k + 1][h + 1] 
                                classArr[r][days[d]][s].nameF = rows[k][h]
                                classArr[r][days[d]][s].teacherF = rows[k + 1][h]
                                let classroom = rows[k][h + 2]
                                classroom = classroom.split(',')
                                classArr[r][days[d]][s].classroomF = classroom[0].trim()
                                classArr[r][days[d]][s].classroomS = classroom[1].trim()
                            }
                            else{
                                classArr[r][days[d]][s].name = rows[k][h]
                                classArr[r][days[d]][s].teacher = rows[k + 1][h]
                                classArr[r][days[d]][s].classroom = rows[k][h + 2] 
                            }
                            r++
                        }   
                    } catch (err){
                        console.log(err)
                    }
                }
                console.log(classArr)
            })
        })
    }
}
</script>

<style scoped>
.main{
    padding-top: 110px !important;
    min-height: 100vh;
}
</style>