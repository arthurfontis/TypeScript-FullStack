interface People {
    name: string,
    age: number,
    profission?:string
}

const people: People = {
    name: "Fontis",
    age: 19
}

const outerPeople: People = {
    name: 'Raimundo',
    age: 50,
    profission: 'Pedreiro'
}

const arrayPeople: People[] = [  //Array<People>, dizendo que o array é do tipo obj(People)
    people,
    outerPeople
]

const arrayNum: number[] = [
    1,2,3
]
const arrayStr: Array<string> = [
    'a','b','c'
]