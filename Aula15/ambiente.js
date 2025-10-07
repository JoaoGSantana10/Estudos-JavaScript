let num = [5, 8, 2, 9, 3]
num[5] = 5
num.push(7)
num.sort()
console.log(`Nosso vetor é o: ${num}`)
console.log(`O vetor tem ${num.length} posições!`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}
console.log(`o vetor é: ${num}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log("o valor não foi encontrado")
}else {
    console.log(`O valor está na posição ${pos}`)
}

// se você botar para procurar um número dentro vetor, exemplo: let pos = num.indexOf(4) e ele não existir ele retorna o -1 falando que o valor não foi achado.