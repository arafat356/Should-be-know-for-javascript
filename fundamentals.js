//      should be know
// how to declare a variable useing let and const
const fatherName = "name";
// const is not change anymore time 
let seasong = 'rainy ';
// this is change able
//6 basic condition > < === !== >=
//multiple condition : && ||
if (fatherName === 'name' || seasong === 'rainy') {} else if (fatherName === 'name') {} else {}
//3.array declare
//index
//length,push
const numbers = [54, 674, 34, 34, 64];
numbers[0] = 34;

//for loop

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number)
}

//funtion 
function multiplay(number1, number2) {
    const retult = number1 * number2;
    return retult;
}

const output = multiplay(34, 35);

// object 
//3 ways to access property by naem
const student = {
    name: 'abdul koddos',
    age: 34,
    movies: ['ami tumar h cai']
}

console.log(student.age) //direct by property
console.log(student['age']) //assess via property name string
console.log(student[age])