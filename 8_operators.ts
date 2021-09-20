interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // "name" | "age"

let key: PersonKeys = 'name'
key = "age"

// ket = "job"
type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// 1
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // "Name" | "email"
// 2
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // "name" | "email"

let userId: UserKeysNoMeta1 = 'name'
// userId = '_id'

