let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()
/*for(let pos = 0; pos <= num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log(num)
let pos = num.indexOf(9)
console.log(`O valor do 9, está na posição ${pos}`)