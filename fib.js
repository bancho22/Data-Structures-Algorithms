'use strict'

function fibRec(n){
    if(n === 0) return 0
    if(n === 1) return 1
    if(n === 2) return 1
    return fibRec(n - 1) + fibRec(n - 2)
}


function fib(n){
    let fibArr = [0, 1]
    for(let i = 2; i <= n; i++){
        fibArr.push(fibArr[i - 1] + fibArr[i - 2])
    }
    return fibArr[n]
}


console.time('recursive')
console.log('recursive', fibRec(46))
console.timeEnd('recursive')

console.time('iterative')
console.log('iterative', fib(46))
console.timeEnd('iterative')
