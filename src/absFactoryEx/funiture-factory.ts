import { Chair, IChair } from "./chair";
import ChairFactory from "./chair-factory";
import { factoryError } from "./error";
import { ITable, Table } from "./table";
import TableFactory from "./table-factory";

interface IFurniture extends IChair, ITable{}

export default class FurnitureFactory {
    static getFurniture(furniture: string): IFurniture | undefined {
        try {
            if(['SmallChair', 'MediumChair', 'BigChair'].indexOf(furniture)> -1){
                return ChairFactory.getChair(furniture)
            }
            if(['SmallTable', 'MediumTable', 'BigTable'].indexOf(furniture)> -1){
                return TableFactory.getTable(furniture)
            }
            throw new Error("No Factory Found")
        } catch(e) {
            console.log(e);
        }
    }
}