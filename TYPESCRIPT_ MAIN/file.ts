
var fun:(fname:string,...abc:string[])=>string=
function(firstname:string,...ccd:string[]){
return ccd.join(" ")+firstname;
}
console.log(fun("ZIA","zaheer ahmed khan","i like myself", "i like to be an enthusiast."));

let tasks:string[]=["i am an idiot","you are also an idiot"]

let car:{ model: number, price: number}
let car1 : typeof car = { model: 789, price: 89};
let bike :{ model: number, price: number , year:number}
let bike1 :typeof bike = {model:456,price:23,year:23}
//bike=car // error because the // 'year' is missing in car.
car=bike1
console.log(car)
console.log(`${car.model} and car is of price ${car.price}`)

//import { error } from "console";

// var f:(string)=> string;
// f=x => '('+x+')'
// var h: ((string)=>string)[]
// h=[]
// h.push(f);
// console.log(h[0]("h"))
// there is a error because parameter cannot be a type

//const a =3
//a++
//console.log(a)

// if (true){_
//      let a =7 }
// else {
//     let a="tr" 
//     }
// console.log(a)


//var a:number="7"

// anonynomous function ,self calling ,named ,lamda ,default

// const enum color {red=1,green,blue}
// var vo:string=color[1]
// console.log(vo)
//
// //compile error

// var x:any="tom"
// if (typeof x === 'string')
// {
//     console.log(x.length)
// }
// x.unknown();

// //runtime error
// THE BELOW IS NOT CORRECT BECAUSE FUNCTION DOESNOT HAVE AND ENDDING RETURN TYPE
// function add(arg :string|number|boolean):string | boolean | number 
// {
//     if (typeof arg === "string")
//     {
//       return arg  + "h";
//     }
//     if (typeof arg === "number")
//     {
//       return arg  + 1;
//     }
//     if (typeof arg === "boolean")
//     {
//        return arg && false ;
//     } 
// }
// //THE ONE BELOW  IS CORRECT 
// function add1(arg :string|number|boolean):string | boolean | number|undefined{
// if (typeof arg === "string")
// {
//    string :  return arg  + "h";
// }
// if (typeof arg === "number")
// {
//    number: return arg  + 1;
// }
// if (typeof arg === "boolean")
// {
//     boolean: return arg && false ;
// }
// else{
//     return "PAKISTAN";
// }
// }
// console.log(add(78))
// //line 1

// let myt={name :"to",id :2}
// myt={id:4,name:"tom"}
// myt={id:5,myname:"mike"}
// // error on line 3

// var a:{foo:number}
// var a1={foo:5,bax:5}
// a=a1

//thora = zayada
// //no error 

//var myfunction = f => {this.x="x";};
// var myfunction = function() {this.x = "x";};
// var myfunction = function() {this.x = "x";};

let anonymousFunc = function() {
    console.log("This is an anonymous function.");
};
anonymousFunc(); // Calling the anonymous function

var resultm:number = (function(x, y) {
    return x + y;
})(5, 10); // result will be 15
console.log(resultm);

function processll(x:number,y:number,minefunction:any){
    return minefunction(x,y);
}
function substract(a:any, b:any)
{
    return a-b;
}
let resultml=processll(12,34,substract)
console.log(resultml)
