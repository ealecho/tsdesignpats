

import BigChair from "./big-chair"
import IChair from "./chair"
import SmallChair from "./small-chair"
import MediumChair from "./medium-chair"

export default class ChairFactory {
    static getChair(chair: string): IChair {
        return (chair === "BigChair")?
                new BigChair():
                (chair === "MediumChair")?
                new MediumChair():
                new SmallChair

    }
}