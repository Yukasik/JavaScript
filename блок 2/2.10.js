/*1*/

if ("0") {
  // Выведется
  alert("Привет");
}

/*2*/

let text = prompt('Какое "официальное" название JavaScript?', "");

if (text == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? “ECMAScript”!");
}

/*3*/

let number = prompt("Введите число", "");

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert("-1");
} else {
  alert("0");
}

/*4*/

let result;

if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}

//

result = a + b < 4 ? "Мало" : "Много";

/*5*/

let message;

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

//

message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
