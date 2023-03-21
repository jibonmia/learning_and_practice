// write a Program to extract numbers from array which are divisible by 10
const numbers = [33,50,79,78,90,101,30];
const result =  numbers.filter(x => x%10 == 0);
console.log(result);