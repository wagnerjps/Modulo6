
function solution (A, K){
    const total = A.lenght
    const result = []
    for(let i = 0; i < total; i++){
        const index = (i + K) % total
        return[index] = A[i]
    }
    return result
}

console.log(solution([3, 8, 9, 7, 6], 1))
console.log(solution([3, 8, 9, 7, 6], 1))