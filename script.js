// 1.
// const algoFunc = (L) => {
//   return (m = L / 100) + " metr";
// };
// console.log(algoFunc(`700`));

// 2.
// const algoFunc = (M) => {
//   return (t = M / 1000) + " tonna";
// };
// console.log(algoFunc(`7000`));

// 3.
// const algoFunc = (Kb) => {
//   return Math.round(Kb / 1024) + " Kb";
// };
// console.log(algoFunc(`2048`));

// 4.
// const algoFunc = (A, B) => {
//   return Math.trunc(A / B) + " marta";
// };
// console.log(algoFunc(10, 3));

// 5.
// const algoFunc = (A, B) => {
//   return (A % B) + " qoldiq";
// };
// console.log(algoFunc(27, 10));

// 6.
// const algoFunc = (A) => {
//   let a = Math.floor(A / 10);
//   let b = A % 10;
//   return `${a} o'nliklar ${b} birliklar`;
// };
// console.log(algoFunc(45));

// 7.
// const algoFunc = (A) => {
//   let a = Math.floor(A / 10);
//   let b = A % 10;
//   return `${a + b}`;
// };
// console.log(algoFunc(25));

// 8.
// const algoFunc = (A) => {
//   let a = Math.floor(A / 10);
//   let b = A % 10;
//   return `${b}${a}`;
// };
// console.log(algoFunc(19));

// 9.
// const algoFunc = (A) => {
//   let a = Math.floor(A / 100);
//   return `${a} yuzliklar`;
// };
// console.log(algoFunc(753));

// 10.
// const algoFunc = (A) => {
//   let b = A % 10;
//   let a = Math.floor(A / 10 % 10);
//   return `${b} birliklar ${a} o'nliklar`;
// };
// console.log(algoFunc(582));

// 11.
// const algoFunc = (A) => {
//   let birlik = A % 10;
//   let onlik = Math.floor((A / 10) % 10);
//   let yuzlik = Math.floor(A / 100);
//   return `${yuzlik + onlik + birlik}`;
// };
// console.log(algoFunc(789));

// 12.
// const algoFunc = (A) => {
//   let birlik = A % 10;
//   let onlik = Math.floor((A / 10) % 10);
//   let yuzlik = Math.floor(A / 100);
//   return `${birlik}${onlik}${yuzlik}`;
// };
// console.log(algoFunc(123));

// 13.
// const algoFunc = (A) => {
//   let birlik = A % 10;
//   let onlik = Math.floor((A / 10) % 10);
//   let yuzlik = Math.floor(A / 100);
//   return `${birlik}${yuzlik}${onlik}`;
// };
// console.log(algoFunc(458));

// 14.
// const algoFunc = (A) => {
//   let birlik = A % 10;
//   let onlik = Math.floor((A / 10) % 10);
//   let yuzlik = Math.floor(A / 100);
//   return `${onlik}${birlik}${yuzlik}`;
// };
// console.log(algoFunc(321));

// 15.
// const algoFunc = (A) => {
//   let birlik = A % 10;
//   let onlik = Math.floor((A / 10) % 10);
//   let yuzlik = Math.floor(A / 100);
//   return `${onlik}${yuzlik}${birlik}`;
// };
// console.log(algoFunc(123));

// 16.
// const algoFunc = (A) => {
//   let birlik = A % 10;
//   let onlik = Math.floor((A / 10) % 10);
//   let yuzlik = Math.floor(A / 100);
//   return `${yuzlik}${birlik}${onlik}`;
// };
// console.log(algoFunc(123));

// 17.
// const algoFunc = (A) => {
//   let yuzlik = Math.floor(A / 100 % 10);
//   return `${yuzlik}`;
// };
// console.log(algoFunc(1789));

// 18.
// const algoFunc = (A) => {
//   let minglik = Math.floor(A / 1000 % 10);
//   return `${minglik}`;
// };
// console.log(algoFunc(3789));

// 19.
// const algoFunc = (second) => {
//   let minute = Math.floor(second / 60);
//   return `${minute} minut`;
// };
// console.log(algoFunc(180));

// 20.
// const algoFunc = (second) => {
//   let hour = Math.floor(second / 60 / 60);
//   return `${hour} hour`;
// };
// console.log(algoFunc(7200));

// 21.
// const algoFunc = (second) => {
//   let minute = Math.floor(second / 60);
//   let soniya = second % 60
//   return `${minute} minut ${soniya} soniya`;
// };
// console.log(algoFunc(3612));

// 22.
// const algoFunc = (second) => {
//   let hour = Math.floor(second / 60 / 60);
//   let soniya = second % 60;
//   return `${hour} hour ${soniya} soniya`;
// };
// console.log(algoFunc(7225));

// 23.
// const algoFunc = (second) => {
//   let hour = Math.floor(second / 60 / 60);
//   let minute = Math.floor((second / 60) % 60);
//   let soniya = second % 60;
//   return `${hour} hour ${minute} minut ${soniya} soniya`;
// };
// console.log(algoFunc(3957));

// 24.
// const algoFunc = (day) => {
//   let arr = ["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"];
//   let newDate = day % 7;
//   return arr[newDate];
// };
// console.log(algoFunc(12));

// 25.
// const algoFunc = (day) => {
//   day += 3
//   let arr = ["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"];
//   let newDate = day % 7;
//   return arr[newDate];
// };
// console.log(algoFunc(26));

// 26.
// const algoFunc = (day) => {
//     let arr = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba", "yakshanba"];
//     let newDate = day % 7;
//     return arr[newDate];
// };
// console.log(algoFunc(8));

// 27.
// const algoFunc = (day) => {
//     day += 5
//     let arr = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba", "yakshanba"];
//     let newDate = day % 7;
//     return arr[newDate];
// };
// console.log(algoFunc(1));

// 29.
// const algoFunc = (A, B, C) => {
//     let kvadrat = C ** 2;
//     let tortburchak = Math.floor(A * B / kvadrat);
//     let qoldiq = A * B % kvadrat
//     return `${tortburchak} martta: ${qoldiq} joylashmay qolgan yuzasi`
// }
// console.log(algoFunc(24, 30, 10));

// 30.
// const algoFunc = (A) => {
//   let year = `${Math.floor(A / 100 + 1)}-yuz yillik`;
//   return year;
// };
// console.log(algoFunc(100));

