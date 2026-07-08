class Animal{

    speak(){
        console.log("Animal speaks");
    }

}

class Dog extends Animal{
   

    bark(){
        console.log("Dog barks");
    }

}

const d = new Dog();

d.speak();

d.bark();
const a=new Animal();
a.speak();
//a.bark();//issue for inheritance 