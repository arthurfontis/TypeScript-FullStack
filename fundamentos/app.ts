//AULA - ARRAY MANIPULANDO
const array: Array<number> = [1,2,3,4]
const buscaNum = array.find(num => num > 2) //retorna o primeiro valor que achar na condição

array.forEach( num => {
    if(num % 2 == 0){
        console.log(num)
    }
})
console.log('-------------------')

array.map(num => {
    if(num > 2 ){
        console.log(num)
    }
})

console.log('-------------------')
console.log(buscaNum)

//AULA - ARRAY  
// const array: Array<number> = [1,2,3,4,5]

// const stringArray: string[] = ['a','b','c']

// console.log(array)
// console.log(stringArray.length)

// array.push(6)
// console.log(array)
// array.pop()
// console.log(array)


//AULA - DECISÕES E REPETIÇÕES
// const num: number = 15
// if(num > 15){
//     console.log("número maior que 15")
// } else if(num === 15) {
//     console.log("número igual a 15")
// } else {
//     console.log("Número menor que 15")
// }

// const typeuser = {
//     adm: "Seja Bem vindo ADM",
//     student: "Seja Bem vindo student",
//     viewer: "Você pode vizualizar apenas"
// }


// function validateUser(user: string){
//     console.log(typeuser[user as keyof typeof typeuser])
// }
// const user = 'adm'

// validateUser(user)
// validateUser('student')
// validateUser('viewer')


//AULA - OBJETOS E INTERFACES
// interface People {
//     name: string,
//     age: number,
//     profission?:string
// }

// const people: People = {
//     name: "Fontis",
//     age: 19
// }

// const outerPeople: People = {
//     name: 'Raimundo',
//     age: 50,
//     profission: 'Pedreiro'
// }

// const arrayPeople: People[] = [  //Array<People>, dizendo que o array é do tipo obj(People)
//     people,
//     outerPeople
// ]

// const arrayNum: number[] = [
//     1,2,3
// ]
// const arrayStr: Array<string> = [
//     'a','b','c'
// ]