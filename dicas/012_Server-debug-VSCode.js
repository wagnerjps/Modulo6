const express = require('express')
const apiUsers = require('./repositories/UserRepository')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {

    const user = req.query.user
    if(user){
        apiUsers.addUser(user)
    }

    const users = apiUsers.getUsers()
    return res.json({ users })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})