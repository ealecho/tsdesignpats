/*  Factor Concept */


//Product Interface
interface IProduct {
    name: string
}


class ConcreteProduct implements IProduct {
    name = ` `
}

//Concrete Product is the object returned from the factory
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = "ConcreteProdcutA"
    }
}

//Concrete Product is the object returned from the factory
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = "ConcreteProductB"
    }
}

//Concrete Product is the object returned from the factory
class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = "ConcreteProductC"
    }
}

//Declared the factory method that will return the object requested from it
class Creator {
    static createObject(someProperty: string) : IProduct {
        if (someProperty === "a") {
            return new ConcreteProductA()
        } else if (someProperty === "b") {
            return new ConcreteProductB()
        } else {
            return new ConcreteProductC()
        }
    }
}

// The Client
const PRODUCT = Creator.createObject('b')
console.log(PRODUCT.name)

