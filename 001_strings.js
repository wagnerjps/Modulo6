// Funções SPLIT e JOIN
const name = 'Wagner Silva'
console.log(name.split(' ').join(' <===> '))

// Interpolação de strings
const num1 = 2
const opa = `
String
Multi
Linhas
name: ${name}
soma 1 + 1 = ${1+1}
soma 1 + ${num1} = ${1+num1}
`
console.log(opa)

// Concatenação de Strings
const outra = name + ' ' + opa
console.log(outra)


