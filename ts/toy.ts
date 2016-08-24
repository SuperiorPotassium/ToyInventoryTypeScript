import * as toyCategory from "./toyCategory"

export interface Toy {
    name: string
    category?: toyCategory.ToyCategory
}

export class Initial implements Toy {
    name = "Please select a toy"
}

export class toyTruck implements Toy {
    name: string = "Mater"
    toyCategory = new toyCategory.DisneyCarCategory()
}