// Your code here

class Cat {
  constuctor(name,sex){
    
  }
  speak(){
    return `${this.name} says meow!`
  }
  
}
class Dog {
  constuctor(name,sex){
    
  }
  speak(){
    
    return `${this.name} says woof!`
    
  }
  
}
class Bird {
  constuctor(name,sex){
    
  }
  speak(){
    if (this.sex === "male"){
      return `It's me! ${this.name}, the parrot! `
    }
    else{
      return `${this.name} says squawk!`
    }
  }
  
}

let cat = new Cat("she","female")
cat.speak
let dog = new Dog("she","female")
dog.speak
let cird = new Bird("she","male")
bird.speak