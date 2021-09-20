const str: string  = 'Hello world!'
const isFetching: boolean = true
const isloading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'hello TS'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['hello', 'world']

// tuple
const contact: [string, number] = ['Alexey', 1234567890]

// Any
let variable: any = 42
//...
variable = 'New string'
variable = []

// ======
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Gendalf')

// Never

function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {
    }
}

// Type
type Login = string
const login: Login = 'admin'
type ID = string | number
const id1: string = 'sdg'
const id2: number = 1235
//

type SomeType = string | null | undefined

