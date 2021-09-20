class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name:string){
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

// class Car {
//     readonly modek: string,
//     readonly numerOfWheels: number = 42
//
//     constructor(theModal: string) {
//         this.modal = theModal
//     }
// }

class Car {
    readonly numerOfWheels: number = 4

    constructor(readonly model: string) {}
}

class Animal {
    protected vioce: string = ''
    public color: string = 'black'

    private go() {
        console.log("go")
    }
}

class Cat extends Animal{
    public SetVoice(voice: string): void {
        this.vioce = voice
    }
}

const cat = new Cat()
console.log(cat.color)

//================

abstract class Component {
    abstract render(): void
    abstract imfo(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    imfo(): string {
        return "This is info";
    }
}
