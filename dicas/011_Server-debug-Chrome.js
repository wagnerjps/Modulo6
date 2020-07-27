const express = require('express')
const app = express();

app.get('/', function(req, res) {
    console.log('>>here...', new Date().getTime())
    res.send('Hello Wolrd 222!')
})

app.get('/cyclic', function(req, res) {
    function solution (A, K){
        const total = A.length
        const result = []
        for(let i = 0; i < total; i++){
            const index = (i + K) % total
            result[index] = A[i]
        }
        return result
    }
    
    console.log(solution([3, 8, 9, 7, 6], 1))
    console.log(solution([3, 8, 9, 7, 6], 2))
    res.send('Cyclic Rotation')
})

app.listen(3000, function(){
    console.log('Exemple app listening on port 3000*****!')
})


