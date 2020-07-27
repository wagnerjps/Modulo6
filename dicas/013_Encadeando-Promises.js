const fs = require('fs')
const { resolve } = require('path')
const File = './filesistem.txt'

const readFile = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, contents) => {
            if(err){
                reject(err)
            }else{
                resolve(contents.toString())
            }
        })
    })
}

const out = (contents) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log(contents)
            resolve(contents) //retornar o contents para próxima chamada
        }, 2000)
    })
}

const writeFile = (file, contents) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, contents, (err) => {
            if(err){
                reject(err)
            }else{
                resolve(contents) //retornar o contents para próxima chamada
            }
        })
    })
}

//Uma forma
/* readFile(File)
    .then(contents => writeFile('teste.txt', 'Copy file \n\n' + contents)) */

//Outra forma
/* readFile(File)
    .then(writeFile.bind(null, 'teste2.txt')) */

// Testando o encadeamento (Não funciona se as funções não devolverem o contents)
readFile(File)
    .then(out)
    .then(writeFile.bind(null, 'filesistem_copia.txt'))
    .then(contents => writeFile('filesistem_copia-da-copia.txt', 'Copy file \n\n' + contents)) // Ficou por o final pois o contents é modificado aqui


