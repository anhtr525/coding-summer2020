class animals {
    constructor(name, type, food, habitat) {
       this.name = name;
       this.type = type;
       this.food = food;
       this.habitat = habitat;
    };
    speak = function() {
        console.log(this.name);
    };
    static play (object1, object2) {
        object1.speak();
        object2.speak();
    };
}
let cat = new animals("cat", "cute cat", "fish", "house");
cat.speak();
let dog = new animals("dog", "fuzzy dog", "dog food", "house");
animals.play(cat, dog);