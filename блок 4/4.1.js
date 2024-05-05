/* 1 */

let user = {};
user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;

/* 2 */

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

/* 3 */

const user = {
  name: "John",
};

// это будет работать?
user.name = "Pete";
// да, так как мы меняем содержимое объекта, а не сам объект

/* 4 */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}
alert(sum);

/* 5 */

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
