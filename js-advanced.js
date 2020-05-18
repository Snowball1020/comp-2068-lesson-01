console.clear();

//destructuring


const arr = ["The Crow", "The Cramberries", "Cheesecake"];
const [movie,music,food] = arr;

console.log(movie,music,food);
console.log(`My favorite movie is the ${movie}`);

const yuki = {
    name:"Yuki Miyazawa",
    age:28,
    dob:(new Date(1992,1,26).toString())
};

console.log(yuki)

const {name,age,dob} = yuki;
console.log(`Your Name is ${name} and you are ${age} yers old. You were born on ${dob}.`)

const tim = {
    alias: "Super Bob"
}

const {alias, aka = "Tim", race = "Unknown"} = tim;
console.log(alias,aka,race)

//aliasingg destructuring names
const {name:my_name, age:my_age, dob:my_dob} = yuki;
console.log(my_name,my_age,my_dob)

//spread operator

const temps = [98, 76, 35];
const tempChanges = [...temps, 89, 65]
console.log(tempChanges)

const person = {name:"Bob", spouse:"Karen", children:4};
const hobbies = {fav: "Waking the dog", secFev:"Food"};

const completePerson = {...person,hobbies:{...hobbies}};
console.log(completePerson)

function sayHello(name,age,dob){
    console.log(`Hello, ${name} You are ${age} years old And ${dob}.`)
}

const personArr = ["Yuki",28,"1-26-1992"]

sayHello(...personArr)

function sayGoodbye({name,age,dob}){
    console.log(this)
    console.log(`Goodbye, ${name}. ${age} , ${dob}`)
}

sayGoodbye(yuki)

// Arrow Function


const myFirstArrowFunc = () => {
    console.log(this);
    console.log("Arrow!")
};

myFirstArrowFunc();

const func2 = (param1,param2) => {
    console.log(param1,param2)
};

func2("arg1","arg2")

const func3 = param => {
    console.log(param)
};

func3("urg3")

const func4 = param => console.log(param)

func4("hey!!")






