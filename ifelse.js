// 1.
// const myFunc = function (n) {
//   if (n > 0) {
//     return n += 1;
//   } else {
//     return n;
//   }
// };
// console.log(myFunc(5));

// 2.
// const myFunc = function (n) {
//   if (n > 0) {
//     return (n += 1);
//   } else {
//     return (n -= 2);
//   }
// };
// console.log(myFunc(-7));

// 3.
// const myFunc = function (n) {
//   if (n > 0) {
//     return (n += 1);
//   } else if (n == 0) {
//     return 10;
//   } else {
//     return (n -= 2);
//   }
// };
// console.log(myFunc(7));

// 4.
// const myFunc = function (a, b, c) {
//   let musbat = 0;
//   if (a > 0) {
//     musbat += 1;
//   }
//   if (b > 0) {
//     musbat += 1;
//   }
//   if (c > 0) {
//     musbat += 1;
//   }
//   return musbat;
// };
// console.log(myFunc(7, -10, 123));

// 5.
// const myFunc = function (a, b, c) {
//   let musbat = 0;
//   let manfiy = 0;
//   if (a > 0) {
//     musbat += 1;
//   } else {
//     manfiy += 1;
//   }
//   if (b > 0) {
//     musbat += 1;
//   } else {
//     manfiy += 1;
//   }
//   if (c > 0) {
//     musbat += 1;
//   } else {
//     manfiy += 1;
//   }
//   return `${musbat} ta musbat ${manfiy} ta manfiy`;
// };
// console.log(myFunc(7, -10, 123));

// 6.
// const myFunc = function (a, b) {
//   if (a > b) {
//     return `${a} katta`;
//   } else {
//     return `${b} katta`;
//   }
// };
// console.log(myFunc(110, 45));

// 8.
// const myFunc = function (a, b) {
//   if (a > b) {
//     return `${a} ${b}`;
//   } else {
//     return `${b} ${a}`;
//   }
// };
// console.log(myFunc(12, 78));

// 10.
// const myFunc = function (a, b) {
//   if (a != b) {
//     return `a = ${a + b} b = ${b + a}`;
//   } else if (a == b) {
//     return 0;
//   }
// };
// console.log(myFunc(115, 10));

// 11.
// const myFunc = function (a, b) {
//   if (a != b) {
//     if (a > b) {
//       return `a = ${a} b = ${a}`;
//     } else {
//       return `a = ${b} b = ${b}`;
//     }
//   } else if (a == b) {
//     return 0;
//   }
// };
// console.log(myFunc(789, 2352));

// 12.
// const myFunc = function (a, b, c) {
//   if (a < b && a < c) {
//     return a;
//   } else if (a > b && b < c) {
//     return b;
//   } else {
//     return c;
//   }
// };
// console.log(myFunc(2, 4, 3));

// 13.
// const myFunc = function (a, b, c) {
//   if (a > b && a < c) {
//     return a;
//   }
//   if (a > c && a < b) {
//     return a;
//   }
//   if (a < b && b < c) {
//     return b;
//   }
//   if (a > b && c < b) {
//     return b;
//   } else {
//     return c;
//   }
// };
// console.log(myFunc(77, 44, 55));


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