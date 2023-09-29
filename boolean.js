// 1.
// function algoFunc (number) {
//     return number % 2 >= 0 || number % 2 >= 1 ? true : false;
// }
// console.log(algoFunc(96));

// 2.
// function algoFunc (number) {
//     return number % 2 == 1 ? true : false;
// }
// console.log(algoFunc(27));

// 3.
// function algoFunc (number) {
//     return number % 2 == 0 ? true : false;
// }
// console.log(algoFunc(26));

// 4.
// function algoFunc(A, B) {
//   return A > 2 && B <= 3 ? true : false;
// }
// console.log(algoFunc(3, 3));

// 5.
// function algoFunc(A, B) {
//   return A >= 0 && B < -2 ? true : false;
// }
// console.log(algoFunc(1, -3));

// 6.
// function algoFunc(A, B, C) {
//   if (A <= B && A <= C && B <= C) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(1, 2, 3));

// 7.
// function algoFunc(A, B, C) {
//   if (A > B && B < C) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(5, 3, 7));

// 8.
// function algoFunc(A, B) {
//     return A % 2 == 1 && B % 2 == 1 ? true : false;
// }
// console.log(algoFunc(5, 3));

// 9.
// function algoFunc(A, B) {
//   if ((A % 2 == 1 && B % 2 == 0) || (A % 2 == 0 && B % 2 == 1)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(4, 3));

// 10.
// function algoFunc(A, B) {
//   if ((A % 2 == 0 && B % 2 == 1) || (A % 2 == 1 && B % 2 == 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(4, 5));

// 11.
// function algoFunc(A, B) {
//   if (A % 2 == 1 && B % 2 == 1) {
//     return true;
//   } else if (A % 2 == 0 && B % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(7, 9));

// 12.
// function algoFunc(A, B, C) {
//   if (A >= 0 && B >= 0 && C >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(2, 9, 8));

// 13.
// function algoFunc(A, B, C) {
//   if ((A > B && A > C) || (A < B && B > C) || (A < C && B < C)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(2, -9, -8));

// 14.
// function algoFunc(A, B, C) {
//   if (
//     (A > 0 && A > B && A > C) ||
//     (B > 0 && A < B && B > C) ||
//     (C > 0 && A < C && B < C)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(3, -7, -2));

// 15.
// function algoFunc(A, B, C) {
//   if (
//     (A < 0 && B > 0 && C > 0) ||
//     (A > 0 && B < 0 && C > 0) ||
//     (A > 0 && B > 0 && C < 0)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(-3, 7, 1));

// 16.
// function algoFunc(A) {
//   return A % 2 == 0 ? true : false;
// }
// console.log(algoFunc(44));

// 17.
// function algoFunc(A) {
//   return A % 2 == 1 ? true : false;
// }
// console.log(algoFunc(223));

// 18.
// function algoFunc(A, B, C) {
//   if ((A == B && A != C) || (A != B && A == C) || (A != B && B == C)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(9, 25, 25));

// 19.
// function algoFunc(A, B, C) {
//   if (A == -B || A == -C || B == -C) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(25, -0, -25));

// 20.
// function algoFunc(A) {
//   let one = Math.floor(A / 100);
//   let twoo = Math.floor((A / 10) % 10);
//   let three = A % 10;
//   if (one != twoo && one != three && twoo != three) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(123));

// 21.
// function algoFunc(A) {
//   let one = Math.floor(A / 100);
//   let twoo = Math.floor((A / 10) % 10);
//   let three = A % 10;
//   if (one < twoo && one < three && twoo < three) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(159));

// 22.
// function algoFunc(A) {
//   let one = Math.floor(A / 100);
//   let twoo = Math.floor((A / 10) % 10);
//   let three = A % 10;
//   if (one < twoo && one < three && twoo < three) {
//     return true;
//   } else if (one > twoo && one > three && twoo > three) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(753));

// 23.
// function algoFunc(A) {
//   let one = Math.floor(A / 100);
//   let twoo = Math.floor((A / 10) % 10);
//   let three = A % 10;
//   if (one <= twoo && one == three && twoo >= three) {
//     return true;
//   } else if (one >= twoo && one == three && twoo <= three) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(898));

// 24.
// function algoFunc(A, B, C) {
//   let D = B ** 2 - 4 * A * C;
//   if (D >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(1, 4, 4));

// 25.
// function algoFunc(X, Y) {
//   if (X < 0 && Y > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(-2, 3));

// 26.
// function algoFunc(X, Y) {
//   if (X > 0 && Y < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(3, -2));

// 27.
// function algoFunc(X, Y) {
//   if (X < 0 && Y > 0) {
//     return true;
//   } else if (X < 0 && Y < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(-3, -2));

// 28.
// function algoFunc(X, Y) {
//   if (X > 0 && Y > 0) {
//     return true;
//   } else if (X < 0 && Y < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(3, 3));

// 30.
// function algoFunc(a, b, c) {
//   if (a == b && a == c && b == c) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(3, 3, 3));

// 31.
// function algoFunc(a, b, c) {
//   if ((a != b && b == c) || (a != b && a == c) || (a == b && a != c)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(3, 3, 2));

// 32.
// function algoFunc(a, b, c) {
//   if (
//     a ** 2 + b ** 2 == c ** 2 ||
//     a ** 2 + c ** 2 == b ** 2 ||
//     b ** 2 + c ** 2 == a ** 2
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(3, 4, 5));

// 33.
// function algoFunc(a, b, c) {
//   if (a + b > c && a + c > b && a < b + c) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(algoFunc(5, 3, 3));
