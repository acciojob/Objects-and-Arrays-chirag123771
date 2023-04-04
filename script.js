const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const players = ["John", "Mike", "Samantha", "Alice"];
const person = {
  name: "Tom",
  age: 28,
  job: "Developer"
};

const team = players;
const team1 = [...players]; // using spread operator to create a new copy of the array

const cap1 = {...person}; // using spread operator to create a new copy of the object


export {players,person,team,team1,cap1}
