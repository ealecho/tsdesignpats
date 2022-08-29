import BigChair from "../absFactoryEx/big-chair";
import { Chair, IChair } from "./chair";
import { factoryError } from "./error";
import MediumChair from "./medium-chair";
import SmallChair from "./small-chair";

export default class ChairFactory {
    static getChair(chair: string): IChair {
            if(chair==="BigChair") {
                return new BigChair()
            }
            else if (chair==="MediumChair") {
                return new MediumChair()
            }
            else if (chair==="SmallChair") {
                return new SmallChair()
            } else {
                throw new Error("No chair Found")
            }
    }
}