/*1*/

let a = 1,
  b = 1;

let c = ++a; // 2
let d = b++; // 1

alert(a); // 2
alert(b); // 2

/*2*/

let f = 2;

let x = 1 + (f *= 2);
/*
(f *= 2) = 4
1 + 4 = 5, тем самым x = 5 
*/

/*3*/

"" + 1 + 0; // "10"
"" - 1 + 0; // "-1"
true + false;
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // " -9 5"
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; // -2

/*4*/

let g = +prompt("Первое число?", 1); // +
let e = +prompt("Второе число?", 2); // +

alert(g + e);
