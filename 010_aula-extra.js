const fs = require('fs')
const path = './'

//console.log(fs.readdirSync(path), 'Sincrono')

//function ver(err, success) não funciona
//fs.readdir(path, ver(err, success))

// Funciona com a referenciação
//fs.readdir(path, ver)

// Funciona com uma arrow function
//fs.readdir(path, (e, s) => ver(e, s))

// Bind cria uma nova função travando o conteúdo que eu quero

fs.readdir(path, ver.bind(null, path, 'outro valor')) //COM BIND
fs.readdir(path, (err, success) => ver('', '', err, success)) //COM ARROW FUNCTION
fs.readdir(path, ver) //COMO REFERÊNCIA

function ver(caminho, outro, err, success){
    console.log('listing path: ', caminho, ' outro:', outro)
    if(err){
        console.log(err)
    }else{
        console.log(success)
    }
}

