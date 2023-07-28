//var,let,const

// let age=30;
// age=31
// const score=10;
// console.log(score)
// console.log(age);

//string,numbers,boolean,null,undefined

// const name="john";
// const age=30;
// const isCool=true;
// const x=null;
// const y=undefined;
// let z;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

//tempelate string

//  const name="john";
//  const age=30;

//  const hello=`my name is ${name} and i am ${age} years old`

//  console.log(hello);

//Arrays - variables that hold multiple values

// const fruits = ['apples', 'oranges','pears']
// fruits.push('mangoes')
// fruits.unshift('guava')

// console.log(fruits)

//  const person ={
//     firstName:'jonn',
//     lastName:'doe',
//     age:'30',
//     hobbies:['music','movies' ,'sports'],
//     adress:{
//         street:'50 main st',
//         city:'boston',
//         state:'MA'
//     }
//  };
//  person.email = 'john@gmail.com';
// console.log(person.hobbies[1]);

//  const todos =[
//     {
//         id:1,
//         text:'take out trash',
//         isCompleted: true

//     },
//     {
//         id:1,
//         text:'meeting with boss',
//         isCompleted: true

//     },
//     {
//         id:1,
//         text:'Dentist appt',
//         isCompleted: false

//     },
//  ]
//  const todoJSON= JSON.stringify(todos);
// console.log(todoJSON);
 //console.log(todos)

//for loop

// for(let i=0;i<=10;i++){
//     console.log(`for loop number ${i}`)
// }

// let i = 0;
// while(i<=10){
//     console.log(`while loop number ${i}`)
//     i++;
// }

// const x = 0;
// if (x === 10){
//     console.log('x is 10');
// } else if (x>10) {
//     console.log('x is greater than 10')
// }
// else {
//     console.log('x is less than 10')
// }

// const x=6;
// const y=10;
// if(x>5 && y <11){
//     console.log('x is greater than 5 y is less than 11')
// }

//turnary operator

// const x = 20;
// const color = x>10 ? 'red' : 'blue';

// console.log (color)

// function addNum(num1,num2){
//     return num1 + num2;
// }
// console.log(addNum(4,5));

// const addNums = (num1, num2)=>num1+num2;
// console.log(addNums(5,5))


// function Person(firstName,lastName,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob);

// }
// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// //Isntantiate object
// const person1 = new Person('john','Doe','4-3-1980');
// const person2 = new Person('john','Doe','4-3-1980');

// console.log(person1);

// class Person{
//     constructor(firstName,lastName,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();

//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('john','Doe','4-3-1980');
// const person2 = new Person('john','Doe','4-3-1980');

// console.log(person1);





