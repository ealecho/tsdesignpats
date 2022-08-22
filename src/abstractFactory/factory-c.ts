import { factory } from "typescript"

export interface IProductC {
    name: string
}

class ConcreteProduct implements IProductC {
    name = ""
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = `Factory C: ConcreteProduct A`
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = "Factory B : ConcreteProduct B"
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = "Factory C: ConcreteProduct C"
    }
}


const factoryError = (err: string) : Error =>  {throw new Error(err)}

export class FactoryC {
    static getObject(some_property: string): IProductC {
        try {
            (some_property==="a")?ConcreteProductA:
            (some_property==="b")?ConcreteProductB:
            (some_property==="c")?ConcreteProductC:
            factoryError("Class not found in Factory C")
        }catch(e) {
            console.log(e);
        }
        return new ConcreteProduct()
    }
}