/*console.log("zaheer ahmed")
let myname : string ="xaheer ahmed abbasi";
let u:any="string"//any is used to assign any type of value to variable and it can be modified later on
myname="zaheer ahmed ";
console.log(myname)
const address="isl";
var age = 25;
console.log(age);
// Define a variable with a specific type
let define:boolean=true;

let message: string = "Hello, TypeScript!";
function add (a:number,b:string|number)
function addNumbers(a: number, b: number): number {
  return a + b;
}
function sumArray(numbers: number[]): number {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
function nameprint(name :string) : string {
    return name;
}
console.log(myname);
let result = addNumbers(5, 3);
console.log("Result:", result);
for (let i =0 ;i<5;i++)
{
const n =nameprint("zaheer");
console.log("this is the name of the person you want to print name of ",n);
}
let numbers = [1, 2, 3, 4, 5];
console.log("Array Sum:", sumArray(numbers));
//\n for next line
let zaheer ="my name is zaheer \n and i study in germany \n and i am here for working";
console.log(zaheer)
//same work can be done using ` 
let areezah=`ahmed
nasir
usama
usman ${zaheer} 
`
//${} is used for concatination of variable
console.log(areezah);
let name3="moiz";
let name7=name3+"abdullah";
console.log(name7);
*/
/*
let num4: number = 56;
for (let i =0;i<5;i++)
{
num4+=9;}
let num =56;
console.log(num4+num);
//double equal checks value only whereas triple equals also checks the datatype also
console.log(num4===num)
//lvlsame as c++ code for check for comparision
let numbe : number =23;
if(numbe<num4)
  {console.log("my name is zaheer ahmed",numbe);
}
else if(numbe<num)
{
console.log("number is greater",numbe);
}
else
{
  console.log("no number is greater");
}
******const promptsy=require('prompt-sync')();
******let userNAME=promptsy("enter your name..");
******console.log("your name is ",userNAME);

let namei = promptsy('Enter your name: ');
console.log(`Hello, ${namei}!`);//dollar sign means ${var-name} will print the value in them

function sum (a:number , b: number ):number
{
return a+b;
}


let soodo: number=5;
let sooda:number =6;
console.log(sum(sooda,soodo));
*/
// function greetings(name : string):string{
//   let greet=`hi !MR ${name} you  are welcome to the party`;
//   return greet;
// }
// let result = greetings("areezah");
// console.log(result);

// let sum =(x:number,y:number):number =>{return x+y;}
/*
 function CREDIT_SCORE (BALANCE:number,MINIMUM_BALACE:number,MAX_BALANCE:number):number
 {
 let A :number = BALANCE + MINIMUM_BALACE+MAX_BALANCE;
 return A;
 }*/
// let a =99;
// let b =67;
// let c=78;
// let credit=CREDIT_SCORE(a,b,c);
// if(credit>=250&&credit<300)
// console.log("A+");
// else if(credit>=220&&credit<250)
// console.log("B");
// else if (credit>=180&&credit<220)
// console.log("C");
// else if (credit>=250&&credit<300)
// console.log("D");
// else
// console.log("low");
// const prompts=require('prompt-sync')();
// let no:number=parseFloat(prompts("enter no"));
// let no1:number=parseFloat(prompts("enter second no"));
// let no2:number=parseFloat(prompts("enter third no"));
// let credit2=CREDIT_SCORE(no,no1,no2);
// if(credit2>=250&&credit2<300)
// console.log("A+");
// else if(credit2>=220&&credit2<250)
// console.log("B");
// else if (credit2>=180&&credit2<220)
// console.log("C");
// else if (credit2<180)
// console.log("D");
// else
// console.log("low");
let arr2 = ["zaheer", 45, "V", "AHMAD", 78];
// let colors=["green","blue","grey","black","purple"];
// console.log(colors[2]);//max index is 4 and max elements are five in this array

// console.log(arr2);console.log(arr2.pop());
// console.log("ARRAY AFTER POPPING THE LAST ELEMENT",arr2);
// arr2.push("abbasi");
// console.log("ARRAY AFTER PushingTHE ELEMENT",arr2);
// arr2.shift();
// console.log("ARRAY AFTER shifting THE first ELEMENT",arr2);
//push and pop works at the end and shift and unshift(ENTER) works in the begining

// arr2.splice(2,0,"ali")
// console.log(arr2);
// arr2.splice(2,1,"maheen","anas")
// console.log(arr2);
// arr2.splice(2,1,"hamza","usama","ahmed")
// console.log(arr2);
//SPLICE ADD AND SLICE REMOVE

/*
let myourtuple :readonly[number,string,boolean];
myourtuple=[67,"abdul",false];
console.log(myourtuple);
let tuple :[number,string,boolean]
tuple = [77,"abdl",true]
tuple.push("ais ke ander ind four ke bad values specialize karsakte ha")
console.log(tuple)*/

// let typle :[string,number,boolean]
// typle =["zaheer ahmed", 889,true]
//  //when we have a constant type we have to initialize during declaration
//  const graph : [X: number,Y:number]=[77.5,88.9]
//  console.log(graph);
//  let shape :{ size : string ,color :string }={
//   size: "round",
//   color:"blue"
//   };
// let car: {type: string,model : number,year: number}
// car={
//   type: "sedan",
//   model:90,
//   year: 2009
// };
// car.type = "lamozine";
// //Example with an optional property means when
// //we can declare later outside the parathesis
// //we use ? symbol
// const box:{length :number,width:number,height?:number}={
// length:77,
// width:88
// }
// box.height=99;
// const nameagegroup :{[index: string]:number}={};
// nameagegroup.zaheer=78;
// nameagegroup.in=90;

//===================================================
// interface wood {
//   [key:string]:string;
// }
// let timbur:wood = {
//   quality:"good",
//   maswak:"hard",
//   chatni:"marcheen"
// }
// interface BOOK {
//   [key: string]:number;
// }
// const harrypotterbook :BOOK= {
// pages:78,
// chapters:7,
// topic:67,
// }
// harrypotterbook["price"]=80;
// harrypotterbook["published"]=1982;
// harrypotterbook.noofauthor=7;
// console.log(shape["color"]);
// console.log(harrypotterbook);

// interface IDENTITY
//  { [key:string]:number|string;}
// const person:IDENTITY = {
//   NAME:"ZAHEER",
//   PHONENUMBER:789,
//   GMAIL:"ZAHEERAHMED@getMaxListeners.COM"
// };
// const person2:IDENTITY={
//   AGE:19,
//   FATHERNAME:"SAEED AHMED",
//   ADDRESS:"PD#744 B"
// };
// console.log("data of second person is inscribed in your front",person2);
// console.log("data of first person in detail is inscribed below ",person);
// enum direction {
// north ="180degree",
// south="190degree down",
// east="279 degree",
// west="360degree left"
// };
// let currentdirection=direction.north;
// console.log (currentdirection);

// for(let i =0;i!==5;i++)
// {console.log("hi dear")
// }
// //aliases
// type carYear = number|string;
// type cartype= string

// let car :{typeofcar:cartype,Year:carYear}={typeofcar:"LAZON",Year:45}

// type StringOrNumber = string|number;
// function add(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
//   return a + b;
// }
// function multiply(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
//   if (typeof a === "string" || typeof b === "string") {
//     return a + b;
//   } else {
//     return a * b;
//   }
// }

//  interface Rectangle {
//   height: number,
//   width: number
// }
// const rectangle: Rectangle = {
//   height: 20,
//   width: 10
// };
// //extends keyword is used to extend the interface
// // interface newinterface extends oldinterface{}

// let arr=["ZIA","WANIA","USMAN"]
// console.log(arr.sort());
// let arr9=[1,2,3,4,5677,88,99,4]
// let counter=0;
// for(let a=0;a<arr9.length;a++)
// {
//   if(arr9[a]%2===0){
//   console.log(arr9[a])
//   counter++
//   }
// }
// console.log(counter)
// let arr8=[1,2,3,4,5677,88,99,4]
// let sum=0;
// for(let m=0;m<arr8.length;m++)
// {
//   sum=sum+arr8[m]
// }
// console.log(sum)

// import myName from "./firstmodule"
// console.log(myName)
// import {myage} from "./firstmodule"
// console.log(myage)
// import { mywork } from "./firstmodule";
// console.log(mywork);
// in import you can use any name for default export
// but you have to use curly braces and same name for other imports
// //type of determines type of the data
// interface Product
// {
// itemno:number,
// name:string,
// productno:number,
// price:number
// }
// let lays:Product={
// itemno:89,
// name:"crisps",
// productno:789,
// price:50
// }
// interface car{
//   model:number,
//   milage:number
// }
// let bMW :car ={
// model:89,
// milage:789
// }
// interface motorbike{
//   model:number,
//   milage:number,
//   speed:number
// }
// let H2R:motorbike={
//   model:678,
//   milage:7809,
//   speed:120
// }
// function careffiency(vehicle:motorbike/* ** */ ):string{
// return vehicle.milage.toString() + vehicle.model.toString() ;
// }
// bMW=H2R
// //H2R = bMW //HERE ERROR IS IT BECAUSE H2R HAVE MORE PROPERTIES THAN BMW
// console.log(careffiency(H2R))
// //VALUE AND TYPES SAME COULD BE PASS IN TYPESCRIPT RATHER THEN NAME**
// let myType = { name: "Zia", id: 1 };
// let myType2 = { id: 2,  name: "Tom" };
// myType=myType2
// let myType3={name:"zaheer",id:78,age:89}
// myType=myType3
// var z: { foo: number, bar?: number };
// var z1 = { foo: 1, baz: 2 };
// z = z1;//no error because in z variable the bar is optional name

// enum Color1 {
//   Red =2,
//   Green,
//   Blue=5,
// }
// var colorName: string = Color1[2];
// var colorselect = Color1["Blue"];
// console.log("INDEX OF THE COLOR IS ",colorselect)
// console.log("NAME OF THE COLOR IS :",colorName);
// console.log(typeof colorName);

// enum Direction {
//   North,
//   South,
//   East,
//   West,
// }

// // Accessing enum values
// const myDirection = Direction["North"];
// console.log(myDirection); // Outputs: 0

// let myname2:number =7;
// // let myname : unknown = 6;
// // myname as string;
// // console.log((<string> myname).length)
// let stringval:string = myname2.toString()
// console.log("type of res...",stringval)

// const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);//IN CONST ENUM YOU CAN ONLY ACCESS THE MEMBERS USING STRING I.E COLOR2["BLUE"]

const numbers: number[] = [1, 2, 3, 4, 5];

console.log("Original Array:", numbers);

// Using array functions

// // Add elements to the end
// numbers.push(6, 7);
// console.log("After push:", numbers);

// // Remove elements from the end
// const poppedValue = numbers.pop();
// console.log("Popped Value:", poppedValue);
// console.log("After pop:", numbers);

// // Add elements to the beginning
// numbers.unshift(0);
// console.log("After unshift:", numbers);

// // Remove elements from the beginning
// const shiftedValue = numbers.shift();
// console.log("Shifted Value:", shiftedValue);
// console.log("After shift:", numbers);

// // Concatenate arrays
// const moreNumbers: number[] = [8, 9, 10];
// const combinedArray = numbers.concat(moreNumbers);
// console.log("Combined Array:", combinedArray);

// // Join array elements into a string
// const joinedString = numbers.join("***");
// console.log("Joined String:", joinedString);

// Create a slice of the array
// const slicedArray = numbers.slice(2, 4);// ignoring the start and including the
// console.log("Sliced Array:", slicedArray);

// // Remove and replace elements in the middle
// numbers.splice(2, 1, 6, 7);// 2 index se 1 cheez hata ke 6,7 ko add kardo
// console.log("After splice:", numbers);

// // Iterate over the array using forEach
// numbers.forEach((num) => {
//   console.log("forEach:", num);
// });

// // Create a new array by mapping the elements
// const squaredNumbers = numbers.map((num) => num * num);
// console.log("Mapped Array (squared):", squaredNumbers);

// // Filter elements that meet a condition
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log("Filtered Array (even numbers):", evenNumbers);

// // Reduce the array to a single value (sum of elements)
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log("Sum of Array:", sum);

// // Check if any element meets a condition
// const hasEven = numbers.some((num) => num % 2 === 0);
// console.log("Has Even Numbers:", hasEven);

// // Check if all elements meet a condition
// const allEven = numbers.every((num) => num % 2 === 0);
// console.log("All Even Numbers:", allEven);

// // Find the first element that meets a condition
// const foundNumber = numbers.find((num) => num > 5);
// console.log("First Number > 5:", foundNumber);

// // Find the index of the first element that meets a condition
// const foundIndex = numbers.findIndex((num) => num > 5);
// console.log("Index of First Number > 5:", foundIndex);

// // Sort the array
// numbers.sort((a, b) => a - b);
// console.log("Sorted Array:", numbers);

// // Reverse the array
// numbers.reverse();
// console.log("Reversed Array:", numbers);

// // Check if an element is included in the array
// const includesFive = numbers.includes(5);
// console.log("Includes 5:", includesFive);

// let myadd1=function(x:number,y:number):number{
//   return x+y;
// }
// console.log(myadd1(7,8))

// console.log("this is task 1");
// setTimeout(() => {
//   console.log(
//     "this is task 2 ",
//     "this will take the data from the database for the purpose of data calculation"
//   );
// }, 3000); // this is time in milliseconds here 3000 is 3 sec
// setTimeout(() => {
//   console.log("this is the 3rd task");
// }, 0);
// console.log("this is the 4th task");

// class PERSON {
//   private NAME: string;
//   public age6: number;
//   constructor(name: string, age: number) {
//     this.NAME = name;
//     this.age6 = age;
//   }
//   public getname(): string {
//     return this.NAME;
//   }
// }
// let manager = new PERSON("ZAHEER", 45);
// console.log(manager.getname());

// interface vehicle {
//   make: string;
//   model: string;
//   year: number;
//   start(): void;
// }
// class CAR implements vehicle {
//   public constructor(public make: string,public model: string,public year: number) {}
//   public start(): void {
//     console.log("CAR HAS STARTED ");
//   }
// }
// const car1 = new CAR("TOYOTA", "COROLLA", 1234);
// car1.start();
// // "implements" you should have to use all the properties of
// // implemented interface
// // extends inherits the properties and methods from a class
// // super keyword calls the methods ,constructor from the parent class
// // override overides the parents class method
// // ${this.data} -> will print this.data value
// interface ANIMAL {
//   name: string;
//   sound: string;
//   makesound(): void;
// }

// class DOG implements ANIMAL {
//   public constructor(public name: string, public sound: string) {}
//   makesound(): void {
//     console.log(this.sound);
//   }
// }
// let buddy = new DOG("BUDDY", "WHOOF");
// buddy.makesound();

// function task1(anyfunction: (text: string) => void) {
//   console.log("do somethings");
//   anyfunction("we are passing the values to callback ");
// }

// function secondtask(text: string) {
//   console.log("this is the callback function", text);
// }

// console.log("print hello world");

// //if a class has an abstract method fuction we cannot create object of it or make instance
// interface SHAPE {
//   COLOR: string;
//   SIZE: number;
// }
// interface SQUARE extends SHAPE {
//   sizelength: number;
// }

// //extends keyword is used to extends the interface in interface and class in class extends keyword is used for inheritance 
// //implement keyword is used to IMPLEMENTS  the INTERFACE in  A CLASS

// class box implements SQUARE {
//  public constructor(public COLOR:string,public SIZE :number, public sizelength :number){}
// }

// let layscarton =new box("blue",90,87)





// let data=add(67,"DHA")
// let work=multiply(89,67)


// class namedvalue<t>
// {
//  private marks :t | undefined;
//  constructor(private name:string){}
//  public setvalue(value :t)
//  {
// 	this.marks=value;
//  }
//  public getvalue(): t|undefined 
//  {
// 	return this.marks;
//  }
// }

// let value=new namedvalue<number>('zaheer');
// value.setvalue(67);
// console.log(value.getvalue());

// type myfunctionarrow= (x:number,y:number)=>number;

// function sumof(...numbe:number[]):number{
// let total=0;
// for (const numbevr of numbe){
// 	total+=numbevr;
// }
// return total;
// }

// function sum(...numbers: number[]): number {
//   let total = 0;

//   for (const number of numbers) {
//     total += number;
//   }

//   return total;
// }

// const sum1 = sum(1, 2, 3, 4, 5); // 15
// const sum2 = sum(10, 20); // 30
// const sum3 = sum(100); // 100
// console.log(sum1)
// console.log(sum2)
//object
let pt:{ x:number, y:number }
pt={x:78,y:89}
function printCoord<t,s>(i:{x:t,y:s}) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
let xu=pt
xu.x=89
xu["y"]=34
printCoord<number,number>(xu);



function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
} 
//this function return two parameters using [,]  `anystring  ${ } anystring `
let x:any =createLoggedPair<string,number>("zaheer",19)

interface person{
  name:string,
  age: number,
  gender:string
}
function nameoffunctin (p:person,property :keyof person):void {
   console.log(`this the data of person you wanted to print ${property} ':' ${p[property]}`)
}
let pio:person={
  name:"zaheer",
  age: 78,
  gender:"male"
}
nameoffunctin(pio,"name");
// ()=> {} this is the way an arrow function is declared 
//with one parameter you can choose to omit brackets 
//this can inherit this. from outer scope .
// function parameter should always be declared with type
const add = (a:number, b:number) => a + b;
console.log(add(5, 10)); // Outputs: 15

