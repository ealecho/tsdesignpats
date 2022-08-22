export interface IProductA {
    name: string
}

class ConcreteProduct implements IProductA {
    name = ""
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = "FactoryA: ConcreteProductA"
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = "FactoryB: ConcreteProductB"
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = "FactoryC: ConcreteProductC"
    }
}

const factoryError = (err: string) : Error =>  {throw new Error(err)}

export class FactoryA {
    static getObject(some_property: string) : IProductA {
        try {
            return (some_property === "a")? new ConcreteProductA():
                    (some_property === "b")? new ConcreteProductB():
                    (some_property=== "c")? new ConcreteProductC():
                    factoryError("Class Not Found in Factory A")
        } catch(e) {
            console.log(e);
        }

        return new ConcreteProduct()
    }
}