/*
  Full Name:Yuki Miyazawa
  Student ID:200407812

  Instructions:
    Follow the steps below. If you have any questions
    please feel free to use Slack to communicate. You
    are allowed to discuss the lab with other students
    but you ARE NOT permitted to copy/paste or share
    code.
  
  Rubric:
    Steps: 11.5 points
    Code Format: 10 points
    Github Link: 10 points

  NOTE: The code format and Github link marks are
    only awarded if the steps have been completed.
    (Code formatting is the visual structure of
      you code. I expect that you have used proper
      tabbing of nested structures so code readability
      is adequate.)
*/

/*
  Step 1 (2.5 points):
    Create an array that contains 4 people objects.
    Each object must have at least 2 properties.
*/

        const people =  [
            {id:1, name:"Yuki", age:28},
            {id:2, name:"Bryan", age:34},
            {id:3, name:"Shinhee",age:31},
            {id:4, name:"Elias", age:32}
        ]            


/*
  Step 2 (6 points):
    Create an arrow function that accepts
    a destructured object as an argument. In the
    body of your function, console.log a string
    template utilizing the properties you
    destructured.
*/

console.log("------------Output for Step 2-------------")
let {id,name,age} = people[0];

const myArrowFunction = ({id, name, age}) => {
    console.log(`ID : ${id} My name is : ${name}, I am ${age} years old. Nice to meet you!`);
}

myArrowFunction({id, name, age})

/*
  Step 3 (3 points):
    Loop over your array using a for/of loop.
    Call your arrow function passing the array item
    as an argument.
*/
console.log("------------Output for Step 3-------------")

// for(let i = 0; i <=3; i++){
//     let{id,name,age} = people[i]; 
//     myArrowFunction(id,name,age);
// }


    for(let person of people){
        myArrowFunction(person)
    }