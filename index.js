// 1.
// let arr = [["name", "ali"], ["age", 15], ["gender", "male"], ["job"]];
// let obj = {};

// for(let value of arr) {
//     obj[value[0]] = value[1] || null;
// }
// console.log(obj);

// 2.
// let obj = { name: "ali", age: 15, gender: "male", job: null };

// let array = [];

// for (let key in obj) {
//   array[array.length] = [key, obj[key]];
// }
// console.log(array);

// 3.
// let number = 540;
// let result = [];

// for (let i = 1; i <= number / 2; i++) {
//   if (number % i == 0) {
//     result.push(i);
//   }
// }
// console.log(result);

// homeworks

// 1.
// const arr = [1, 2, 3, [1, 3, 4, [1, [[3, [1]]]]]];
// console.log(arr.flat(Infinity));
// success

// 2.
// const strs = ["flower", "flow", "flight"];
// ????

// 3.
// const obj = {
//     name: "ism",
//     surname: "familiya",
//     holat: 'active',
//     age: 24,
// }
// console.log(obj.age);
// ????

// 4.
// const number = [2, 7, 12, 15, 27];
// const newNum = [];

// function myFunc() {
//   for (let i = 0; i < number.length; i++) {
//     for (let j = 0; j < number.length; j++) {
//         if (number[i] + number[j] == 27) {
//             newNum[1] = i;
//             newNum[0] = j;
//         }
//     }
//   }
// }
// myFunc();
// console.log(newNum);
// success

// 5.
// const number = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const newNum = [];

// number.forEach((el) => {
//   if(!newNum.includes(el)) {
//     newNum.push(el);
//   } else {
//     newNum.push('_');
//   }
// })
// console.log(newNum.sort());
// success

// 6.
// const palindrome = (x) => {
//     const newWord = x.toString().split('').reverse().join('')
//     return newWord == x ? true : false;
// }
// console.log(palindrome(424));

// 7.
// const a = [1, 2, 3];
// const b = [3, 2, 1];

// const algoFunc = (a, b) => {
//   let aValue = 0;
//   let bValue = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       aValue += 1;
//     } else if (a[i] < b[i]) {
//       bValue += 1;
//     }
//   }
//   return [aValue, bValue];
// };
// console.log(algoFunc(a, b));

// 8.
// const arr = [1, 1, 0, -1, -1];

// const algoFunc = (arr) => {
//   let plus = 0;
//   let minus = 0;
//   let zero = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       plus += 1;
//     } else if (arr[i] < 0) {
//       minus += 1;
//     } else {
//       zero += 1;
//     }
//   }
//   let arrLength = arr.length;
//   plus = (plus / arrLength).toFixed(6);
//   minus = (minus / arrLength).toFixed(6);
//   zero = (zero / arrLength).toFixed(6);

//   return [plus, minus, zero];
// };
// console.log(algoFunc(arr));

// 9.
// const candles = [4, 4, 1, 3];

// const algoFunc = (candles) => {
//   let arr = candles.sort((a, b) => b - a);
//   console.log(arr);

//   if (arr[0] == arr[1]) {
//     return 2;
//   }
//   if (arr[0] != arr[1]) {
//     return 1;
//   }
// };
// console.log(algoFunc(candles));

// 10.
// function myFunc(number, add = 0) {
//   if (number % 2 !== 0) {
//     return `${add} martta bo'lindi. ${number} eng kichik bo'linmagan son.`;
//   } else {
//     return myFunc(number / 2, add + 1);
//   }
// }
// console.log(myFunc(48));

// 11.
// RANDOM FUNCTION.
// function myFunc(array) {
//   const people = Math.trunc(Math.random() * array.length);
//   return array[people];
// }
// console.log(
//   myFunc([
//     "Dilshodbek",
//     "Lochinbek",
//     "Shoxsulton",
//     "who",
//     "Sanjarbek",
//     "Somebody",
//   ])
// );

