abstract class ToyCategory {
    protected imgPath = "img/";

    name: string
    abstract getImageUrl(): string;
}

class DisneyCarCategory extends ToyCategory{
    name = "Disney Cars"
    getImageUrl() {
        return this.imgPath + ".png";
    }
}

class AnimalsCategory extends ToyCategory{
    name = "Toy Animals"
    getImageUrl() {
        return this.imgPath + ".png";
    }
}

class TeenageMutantNinjaTurtlesCategory extends ToyCategory {
    name = "Teenage Mutant Ninja Turtles"
    getImageUrl() {
        return this.imgPath + ".png";
    }
}

export { ToyCategory, DisneyCarCategory, AnimalsCategory, TeenageMutantNinjaTurtlesCategory }