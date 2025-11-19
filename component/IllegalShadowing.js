var a = 10;

{
    let a = 20; // Legal Shadowing
    
}

var b = 20;
{
    const b = 30; // Legal Shadowing
}


console.log(a);
console.log(b);
// let b = 20;

// {
//     var b = 20;  // Illegal Shadowing
// }

// const c = 20;

// {
//     var c = 20;  // Illegal Shadowing
// }

