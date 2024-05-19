var p = { x: 5, y: 10 }; //let p: typeof Point = { x: 5, y: 10 };
// console.log(p.x)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green; // let myColor: number = Color["Green"]; 
console.log(myColor);
console.log(" i am an idiot");
