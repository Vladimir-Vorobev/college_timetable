<template>
    <div class="main container">
            
            <input type="file" ref="file" @change="file()">
            <button type="submit" @click="add()">Отправить</button>
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
                for(let i = 3; i < rows[0].length; i += 5){
                    let classNumber = {
                        class: rows[0][i],
                        mon: [{},{},{},{},{}],
                        tue: [{},{},{},{},{}],
                        wed: [{},{},{},{},{}],
                        thur: [{},{},{},{},{}],
                        fri: [{},{},{},{},{}],
                    }
                    this.classArr.push(classNumber)
                }
                rows = rows.slice(1)
                let n = this.classArr.length
                let s = -1
                let days = ['mon', 'tue', 'wed', 'thur', 'fri']
                for(let k = 0; k < 50; k += 2){
                    for(let j = 0; j < n; j++){
                        for(let g = 0; g < 5; g++){
                            this.classArr[j][days[g]][0].time = rows[0][2]
                            this.classArr[j][days[g]][1].time = rows[2][2]
                            this.classArr[j][days[g]][2].time = rows[4][2]
                            this.classArr[j][days[g]][3].time = rows[6][2]
                            this.classArr[j][days[g]][4].time = rows[8][2]
                        }
                    }
                    try{
                        let r = 0
                        let d = Math.floor(k / 10)
                        if(s == 4) s = 0
                        else s += 1
                        for(let h = 3; h < rows[1].length; h += 5){
                            if(rows[k][h] == '-'){
                                this.classArr[r][days[d]][s].nameS = rows[k][h + 1]
                                this.classArr[r][days[d]][s].teacherS = rows[k + 1][h + 1]
                                this.classArr[r][days[d]][s].classroomS = rows[k][h + 2]
                            }
                            else if(rows[k][h + 1] == '-'){
                                this.classArr[r][days[d]][s].nameF = rows[k][h]
                                this.classArr[r][days[d]][s].teacherF = rows[k + 1][h]
                                this.classArr[r][days[d]][s].classroomF = rows[k][h + 2] 
                            }
                            else if(rows[k][h] != null && rows[k][h + 1] != null){
                                this.classArr[r][days[d]][s].nameS = rows[k][h + 1]
                                this.classArr[r][days[d]][s].teacherS = rows[k + 1][h + 1] 
                                this.classArr[r][days[d]][s].nameF = rows[k][h]
                                this.classArr[r][days[d]][s].teacherF = rows[k + 1][h]
                                let classroom = rows[k][h + 2]
                                try{
                                    classroom = classroom.split(',')
                                    this.classArr[r][days[d]][s].classroomF = classroom[0].trim()
                                    this.classArr[r][days[d]][s].classroomS = classroom[1].trim()
                                }
                                catch(err){
                                    this.classArr[r][days[d]][s].classroomF = classroom
                                    this.classArr[r][days[d]][s].classroomS = classroom
                                }
                            }
                            else{
                                this.classArr[r][days[d]][s].name = rows[k][h]
                                this.classArr[r][days[d]][s].teacher = rows[k + 1][h]
                                this.classArr[r][days[d]][s].classroom = rows[k][h + 2] 
                            }
                            r++
                        }   
                    } catch (err){
                        console.log(err)
                    }
                }
                console.log(this.classArr)
            })
        },
        add(){
            if(this.classArr.length != 0){
                needle.post('http://37.228.118.76:3001/api2/uploadData', {data: this.classArr}, {"json": true}, function(err, res){
                    if(err) throw err
                    else{
                        console.log(res.body)
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