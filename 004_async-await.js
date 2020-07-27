function tempo(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(ms), ms);
    })
}

const fs = require('fs')
function readDir(path){
    return new Promise((resolve, reject) => {
        fs.readdir(path, function(err, lista) {
            if(err){
                reject(err)
            }else{
                resolve(lista)
            }
        })
    })
    
}

async function ola(){
    const list = await readDir('./')
    const ms = await tempo(2000)
    console.log(list)
    console.log('terminou em ', (ms / 1000), ' segundos' )
}

console.log(ola())