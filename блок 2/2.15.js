/*1*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Родители разрешили?");
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Родители разрешили?");
}

// и так, и так будет работать

/*2*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}

// ?

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

// ||

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

/*3*/

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

/*4*/

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x", "");
let n = prompt("n", "");

if (n >= 1 && n % 1 == 0) {
  alert(pow(x, n));
} else {
  alert(`Степень ${n} нет, используйте натуральное число`);
}
