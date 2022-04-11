const numbers = [34, 35, 36, 37, 12, 14]
const student = {
    name: 'abdul koddos',
    age: 34,
    movies: ['ami tumar h cai', 'man will be man']
}

const about = `my name is ${student.name} my age is ${student.age} and i love those 
movie name ${student.movies} has number
${numbers[3]} i love movie name one ${student.movies[0]}`
console.log(about)

// arrow function 
const overcome = () => 33;
const addnumber = num => num + 34;
const iseven = x => x % 2 === 0;
const addthree = (x, e, r) => x + e + r;
const domath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}