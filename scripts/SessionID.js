let dataq = document.cookie.split(";")
let name = ''
let b = 0
let Sessionid = ''
for(let i = 0; i < dataq.length; i++){
let value = dataq[i].toString()
    for(let j = 0; j < value.length; j++){
        if(dataq[i][j] == "="){
            if(name == 'SessionID'){
                b = 1
            }
            name = ''
        }
        else if(dataq[i][j] != " "){
            name += dataq[i][j]
        }
    }
    if(b == 1){
        Sessionid = name
    }
    name = ''
}
export const SessionId = Sessionid