const fs = require('fs')

console.log('Inicio Async')

fs.readdir('./', function(err, lista) {
    if(err){
        console.log('erro', err)
    }else{
        console.log(lista)
    }
})

fs.readFile('./filesistem.txt', function(err, file){
    console.log(file.toString())
})

console.log('Fim Async')

setTimeout(() => {

    console.log('Inicio Sync')
    console.log(fs.readdirSync('./'))
    console.log(fs.readFileSync('./filesistem.txt').toString())
    console.log('Fim Sync')

}, 5000);

