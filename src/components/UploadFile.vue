<template>
    <div class="main container">
        <form style="font-size: 1.3em;">
            <div class="form-group">
                <label for="exampleFormControlFile1">Добавить расписание</label>
                <input type="file" ref="file" class="form-control-file" @change="file()">
            </div>
            <button type="submit" @click="add()" class="btn btn-primary btn-lg">Отправить</button>
        </form>
    </div>
</template>

<script>
import readXlsxFile from 'read-excel-file'
import needle from 'needle'
export default {
    name: 'Test',
    data(){
        return{
            classArr: []
        }
    },
    methods: {
        file(){
            readXlsxFile(this.$refs.file.files[0]).then((rows) => {
                let x = Math.floor(rows.length / 50)
                for(let z = 0; z < x; z ++){
                    for(let i = 3; i < rows[0].length; i += 5){
                        let classNumber = {
                            class: rows[z * 50][i],
                            course: (i - 3) / 5 + 1,
                            day: [[{},{},{},{},{}], [{},{},{},{},{}], [{},{},{},{},{}], [{},{},{},{},{}], [{},{},{},{},{}]]
                        }
                        this.classArr.push(classNumber)
                    }
                    rows = rows.slice(z * 50 + 1)
                    let n = this.classArr.length
                    let s = -1
                    for(let k = 0; k < 50; k += 2){
                        for(let j = 0; j < n; j++){
                            for(let g = 0; g < 5; g++){
                                for(let l = 0; l < 5; l++){
                                    this.classArr[j]['day'][l][0].time = rows[0][2]
                                    this.classArr[j]['day'][l][1].time = rows[2][2]
                                    this.classArr[j]['day'][l][2].time = rows[4][2]
                                    this.classArr[j]['day'][l][3].time = rows[6][2]
                                    this.classArr[j]['day'][l][4].time = rows[8][2]
                                }
                            }
                        }
                        try{
                            let r = 0
                            let d = Math.floor(k / 10)
                            if(s == 4) s = 0
                            else s += 1
                            for(let h = 3; h < rows[1].length; h += 5){
                                if(rows[k][h] == '-'){
                                    this.classArr[r]['day'][d][s].nameS = rows[k][h + 1]
                                    this.classArr[r]['day'][d][s].teacherS = rows[k + 1][h + 1]
                                    this.classArr[r]['day'][d][s].classroomS = rows[k][h + 2]
                                }
                                else if(rows[k][h + 1] == '-'){
                                    this.classArr[r]['day'][d][s].nameF = rows[k][h]
                                    this.classArr[r]['day'][d][s].teacherF = rows[k + 1][h]
                                    this.classArr[r]['day'][d][s].classroomF = rows[k][h + 2] 
                                }
                                else if(rows[k][h] != null && rows[k][h + 1] != null){
                                    this.classArr[r]['day'][d][s].nameS = rows[k][h + 1]
                                    this.classArr[r]['day'][d][s].teacherS = rows[k + 1][h + 1] 
                                    this.classArr[r]['day'][d][s].nameF = rows[k][h]
                                    this.classArr[r]['day'][d][s].teacherF = rows[k + 1][h]
                                    let classroom = rows[k][h + 2]
                                    try{
                                        classroom = classroom.split(',')
                                        this.classArr[r]['day'][d][s].classroomF = classroom[0].trim()
                                        this.classArr[r]['day'][d][s].classroomS = classroom[1].trim()
                                    }
                                    catch(err){
                                        this.classArr[r]['day'][d][s].classroomF = classroom
                                        this.classArr[r]['day'][d][s].classroomS = classroom
                                    }
                                }
                                else{
                                    this.classArr[r]['day'][d][s].name = rows[k][h]
                                    this.classArr[r]['day'][d][s].teacher = rows[k + 1][h]
                                    this.classArr[r]['day'][d][s].classroom = rows[k][h + 2] 
                                }
                                r++
                            }   
                        } catch (err){
                            console.log(err)
                        }
                    }
                    console.log(this.classArr)
                }
            })
        },
        add(){
            event.preventDefault()
            if(this.classArr.length != 0){
                let classArr = this.classArr
                needle.post('http://37.228.118.76:3001/api2/testData', {data: classArr}, {"json": true}, function(err, res){
                    if(res.body != 'OK') alert(res.body)
                    else{
                        needle.post('http://37.228.118.76:3001/api2/uploadData', {data: classArr}, {"json": true}, function(err, res){
                            if(res.body != 'OK') throw err
                            else{
                                alert('Файл успешно добавлен')
                            }
                        })
                    }
                })
            }
            else alert('Файл не выбран')
        }
    }
}

</script>

<style scoped>
.main{
    padding-top: 110px !important;
    min-height: 100vh;
}
</style>