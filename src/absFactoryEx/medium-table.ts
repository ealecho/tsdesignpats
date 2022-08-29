import { Table } from "./table";

export default class MediumTable extends Table{
    constructor(){
        super()
        this.name="Medium Table"
        this.width=60
        this.depth=60
        this.height=60
    }
}