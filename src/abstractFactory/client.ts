import { AbstractFactory } from "./abstractFactory";

let PRODUCT = AbstractFactory.createObject("ab")
console.log(PRODUCT);

PRODUCT = AbstractFactory.createObject("bc")
console.log(PRODUCT);

