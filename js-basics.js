console.clear();

// Im a single line comment

/*

 Im a multi-line comment 

*/

// Mutable varieble ( can change)

var dontUseTheseAnymore = true;
let useThisInstead = true; //scoped to blocks {}

// Non-Mutable (Can not change)

const useTheseAsMuchAsPossible = true;

try {
    useTheseAsMuchAsPossible = false;
} catch(e){
    console.log(e.toString());    
}

let outSideBlock = "Look at me";
{
    console.log(outSideBlock);
    let insideBlock = "You cant see me"
}

try{
    console.log(insideBlock);
}catch(e){
    console.error(e.toString());
}

if(true){
    let name = "Yuki Miyazawa";
}

try{
    console.log(name);
}catch(e){
    console.error(e.toString());
}

//Arrays

const arr = [1, 3, 5]
console.log(arr)

try{
    arr = "Shown";
}catch(e){
    console.log(e.toString());
}

arr[1] = 6;
console.log(arr);

//object
const obj = {
    name: "yuki",
    age: 28,
    bod: "1992-01-26",
    "my name" : "SCM"
}

console.log(obj["name"])
console.log(obj.name)
console.log(obj["my name"])

//controle structure
let direction;
if(obj.age > 20){
    direction = "Down";
}else{
    direction = "Up";
}

console.log("It's all " + direction + " Hill from here")
console.log(`it's all ${direction} hill from here`)

console.log(`
    Hello Dave
    How are you today.
`)

switch(direction){
    case "Up":
    console.log("Go get em tiger");
    break;
    default:
    console.log("You better rest.")

}

switch(true){
    case 5 < 7:
    console.log("true");
    break;
    
}

//loop

for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let item of ["a","b","c"]){
    console.log(item);
}

for(let key in obj) {
    console.log(key);
    console.log(obj[key]);   
}

function sayHello(name){
    console.log(`Hello, ${name}`);
}

sayHello("Yuki");

const helloFunc = sayHello;

console.log(helloFunc)

helloFunc("Kevin")