class Animal{
    name:string;
    constructor(name:string) {
        this.name=name
    }
    makeSound(){
    console.log("___")
    }
}

class Dog extends Animal{

    constructor(name:string) {
        super(name);
    }
    makeSound() {
        console.log("hau hau!")
    }
}

class Cat extends Animal{
    constructor(name:string) {
        super(name);
    }
    makeSound() {
        console.log("meow!")
    }
}

let animals:Array<Animal>=new Array<Animal>()
animals.push(new Animal("animal"))
animals.push(new Cat("kotek"))
animals.push(new Dog("piesek"))

animals.map((animal)=>{
    console.log(`${animal.name} says:`);
    animal.makeSound();
})