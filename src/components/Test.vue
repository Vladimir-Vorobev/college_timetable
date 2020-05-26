<template>
    <div class="main container">
        <input type="file" id="input">
        <input type="submit" value="Отправить">
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
                    if (k < 48){
                        let r = 0
                        let d = Math.floor(k / 10)
                        if(s == 4) s = 0
                        else s += 1
                        for(let h = 3; h < rows[1].length; h += 5){
                            classArr[r][days[d]][s].name = rows[k][h]
                            classArr[r][days[d]][s].teacher = rows[k + 1][h]
                            classArr[r][days[d]][s].classroom = rows[k][h + 2]
                            if(rows[k + 1][h + 1] != null){
                                if(classArr[r][days[d]][s].name == null) classArr[r][days[d]][s].name = rows[k][h + 1]
                                else{
                                    classArr[r][days[d]][s].name += ', '
                                    classArr[r][days[d]][s].name += rows[k][h + 1]
                                }
                                if (classArr[r][days[d]][s].teacher == null) classArr[r][days[d]][s].teacher = rows[k + 1][h + 1]
                                else{
                                    classArr[r][days[d]][s].teacher += ', '
                                    classArr[r][days[d]][s].teacher += rows[k + 1][h + 1]
                                }
                            }
                            r++
                        }
                    }
                }
                console.log(classArr)
            })
        })
    }
}
</script>

<style scoped>

</style>