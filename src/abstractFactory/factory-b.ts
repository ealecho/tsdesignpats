export interface IProductB {
    name: string
}

class ConcreteProduct implements IProductB {
    name = " "
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name ="FactoryB: ConcreteProductA"
    }
}


class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = "FactoryB: ConcreteProductB"
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor(){
        super()
        this.name = "FactoryB: ConcreteProductC"
    }
}

const factoryError = (err: string) : Error =>  {throw new Error(err)}


export class FactoryB {
    static getObject(someProperty: string) : IProductB {
        try {
            (someProperty === "a")? ConcreteProductA:
            (someProperty === "b")? ConcreteProductB:
            (someProperty === "c")? ConcreteProductC:
            factoryError("Class Not Found in Factory B")
        } catch(e) {
            console.log(e);
        }

        return new ConcreteProduct()
    }
}