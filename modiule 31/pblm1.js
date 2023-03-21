
// Program to convert all elements of this array to even numbers using javascript in map function 

const SerialNo = [1,2,3,4,5,6,7,8,9];
const result = SerialNo.map(x => x%2==0? x:x+1);
console.log(result);

// Program to convert all elements of this array to even numbers using javascript in for loop

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 === 1) {
    numbers[i]++;
  }
}
console.log(numbers);
