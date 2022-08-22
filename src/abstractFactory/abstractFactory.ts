import { FactoryA, IProductA } from "./factory-a";
import { FactoryB, IProductB } from "./factory-b";

interface IProduct extends IProductA, IProductB{}


const factoryError = (err: string) : Error =>  {throw new Error(err)}

export class AbstractFactory {
    static createObject(factory: string): IProduct | undefined {
        try {
           return (['aa', 'ab', 'ac'].indexOf(factory) > -1)? FactoryA.getObject(factory[1]):
            (['ba', 'bb', 'bc'].indexOf(factory) > -1)? FactoryB.getObject(factory[1]):
            factoryError("No Factory Found")
        } catch (e) {
            console.log(e)
        }
    }
}