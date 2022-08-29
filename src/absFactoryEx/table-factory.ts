import BigTable from "./big-table";
import { factoryError } from "./error";
import MediumTable from "./medium-table";
import SmallTable from "./small-table";
import { ITable, Table } from "./table";

export default class TableFactory {
    static getTable(table: string): ITable{
                if(table==="BigTable"){
                    return new BigTable()
                }
                if (table==='MediumTable'){
                    return new MediumTable()
                }
                if (table==="SmallTable") {
                    return new SmallTable()
                }
                throw new Error("No Table Found")
    }
}