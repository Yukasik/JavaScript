/*1*/

let i = 3;

while (i) {
  alert(i--); // 1, так как будет уменьшать до 0
}

/*2*/

let i = 0;
while (++i < 5) alert(a); // 1 до 4

let i = 0;
while (i++ < 5) alert(b); // 1 до 5

/*3*/

for (let i = 0; i < 5; i++) alert(i); // 0 до 4

for (let i = 0; i < 5; ++i) alert(i); // 0 до 4

/*4*/

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

/*5*/

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

//

let i = 0;

while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

/*6*/

let num;

do {
  num = prompt("Введите число больше 100", 0);
} while (num <= 100 && num);

/*7*/

let n = 10;

next: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue next;
  }

  alert(i);
}
