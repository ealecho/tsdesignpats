import FurnitureFactory from "./funiture-factory";

let FURNITURE =  FurnitureFactory.getFurniture('SmallChair')
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());

let FURNITURE2 =  FurnitureFactory.getFurniture('MediumTable')
console.log(FURNITURE2?.name);
console.log(FURNITURE2?.getDimensions());