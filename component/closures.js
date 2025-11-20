
// // function a() {
// //     let count = 10;
// //     let c = function (){
// //         console.log(count);
// //     }
// //     c();
// // }

// // a();

// // function x(y) {
// //     var a = 7;
// //     y(a)
// // }

// // x( function (a) {
// //     console.log(a);
// //     console.log("Helo");
// // });


// function x(){
//     var a =7;

//     return function y () {
//         console.log(a);
//         console.log("Helo");
//     }
    
// }

// var z = x();
// console.log(z);
// z();


function z () {
    var b = 900;
    return function x () {
        var a =7;

        return function y () {
            console.log(a,b);
        }
        a = 100;
        
    }
    
}
var c = z();
var p = c();
p();