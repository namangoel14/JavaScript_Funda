greet();

function greet() {
    this.age = 25;
    
    setTimeout(() => {
        console.log("Normal Function!");
        console.log(`Hello, I am ${this.age} years old.`);
    }, 1000)
}
//greetArrow();
const greetArrow = () => {
    this.age = 30;
    
    setTimeout(()=>{
        console.log("Arrow Function!");
        console.log(`Hello, I am ${this.age} years old.`);
    }, 2000)
}

