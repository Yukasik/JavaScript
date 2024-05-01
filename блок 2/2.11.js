/*1*/

alert(null || 2 || undefined); // 2

/*2*/

alert(alert(1) || 2 || alert(3)); // 1 2

/*3*/

alert(1 && null && 2); // null

/*4*/

alert(alert(1) && alert(2)); // 1

/*5*/

alert(null || (2 && 3) || 4); // 3

/*6*/

let value = NaN;

value &&= 10; // NaN
value ||= 20; // NaN
value &&= 30; // 20
value ||= 40; // 30

alert(value);

/*7*/

let age;

if (age >= 14 && age <= 90) {
}

/*8*/

if (!(age >= 14 && age <= 90)) {
}

if (age < 14 || age > 90) {
}

/*9*/

if (-1 || 0) alert("first"); // выполнится
if (-1 && 0) alert("second"); // не выполнится
if (null || (-1 && 1)) alert("third"); // выполнится

/*10*/

let userName = prompt("Кто там?", "");

if (userName === "Админ") {
  let password = prompt("Пароль?", "");

  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === "" || password === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (userName === "" || userName === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
