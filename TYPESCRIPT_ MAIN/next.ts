type Point = { x: number; y: number }; // let Point : { x: number; y: number };
let p: Point = { x: 5, y: 10 }; //let p: typeof Point = { x: 5, y: 10 };
// console.log(p.x)
type Person = { name: string; age: number }; // let zaheer: Person = { name: "Bob", age: 30 };
let A: Readonly<Person> = { name: "Bob", age: 30 }; // type a = Readonly<Person> let b:a={ name: " bob" , age :56 }
// It becomes readonly means data cannot be changed
/* 
type carYear = number|string;
type cartype= string

let car :{typeofcar:cartype,Year:carYear}={typeofcar:"LAZON",Year:45}
 */

// Conditional Types
/* type a<T> = T extends null | undefined ? never : T;
let str: string | null = "Hello";
let m: null| undefined;
let nullable:a<typeof m>="AVC";
console.log("Nullable Value is ",nullable);
let nonNullableStr: a<typeof str> = "i am an idiot of genious peoples ";
console.log(nonNullableStr)
 */
// Intersection Types
type Employee = {
  name: string;
  role: string;
};
type ID = {
  id: number;
};

type EmployeeWithID = Employee & ID;

let employee: EmployeeWithID = {
  name: "Alice",
  role: "Developer",
  id: 123,
};


// Recursive Types
/* interface TreeNode {
  value: string;
  children?: TreeNode[];
}

let tree: TreeNode = {
  value: "root",
  children: [
    {
      value: "child1",
      children: [
        {
          value: "grandchild1",
        },
        {
          value: "grandchild2",
        },
      ],
    },
    {
      value: "child2",
    },
  ],
}; */

// String Literal Types
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function sendRequest(method: HttpMethod, url: string): void {
  // Implementation
}

sendRequest("GET", "/api/data");



type MathOperation = (x: number, y: number) => number;
let addOperation: MathOperation = (a, b) => a + b;
let subtractOperation: MathOperation = (a, b) => a - b;

//  INTERFACE :
// Index Signatures
interface Dictionary {
  [key: string]: string;
}

let colors: Dictionary = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};
console.log(colors["red"]);

enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Green; // let myColor: number = Color["Green"];
console.log(myColor);
console.log(" i am an idiot");




// function overload , no of function utility depends on the type of every function. .
function displayInfo(x: string): void;
function displayInfo(x: number): void;
function displayInfo(x:boolean):void;
function displayInfo(x: string | number|boolean): void {
  if (typeof x === "string") {
    console.log(`String: ${x}`);
  } 
  else if (typeof x === "number") {
    console.log(`Number: ${x}`)
  }
  else {
    console.log(`boolean : ${x}`)
  }
}

displayInfo("TypeScript"); // String: TypeScript
displayInfo(42);



// Higher-Order Function
function multiplyBy(factor: number): (input: number) => number {
  return function (input: number): number {
    return input * factor;
  };
}
// higher order function is called by inner function.
let double: (input: number) => number = multiplyBy(2);
let triple: (input: number) => number = multiplyBy(3);
let doubledValue: number = double(5); // 10
let tripledValue: number = triple(5); // 15


const zaheer=async()=> {
  const response= await fetch("https:anyexample.api.com")
  const data=await response.json()
return data;
}

/* 
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with args: ${args}`);
    return originalMethod.apply(this, args);
  };
}
const log2 = (target: any, key: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;
  descriptor.value = (...args: any[]) => {
    console.log(`Calling ${key} with args: ${args}`);
    return originalMethod.apply(this, args);
  };
};
 */

/* interface NumberCheck {

  value: any;
  subject: string;
}
const isNumber = ({ value, subject }: NumberCheck): value is number => {
  console.log(subject);
  return typeof value === "number";
};
const result: unknown = 42;
const str: string = "i am an idiot";
const sub: string = "english";
if (isNumber({ value: result, subject: str })) {
  // TypeScript knows result is a number here
  console.log(result); // or console.log(isNumber({ value: result, subject: sub }));
}
 */

const logValue = (value: string | number) => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
};
logValue(99.63987)