// Task1
//**Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних. */

const age = +prompt("Вкажіть свій вік");

if (age >= 0 && age <= 11) {
  console.log("Ти дитина");
} else age >= 12 && age <= 17;
{
  console.log("Ти підліток");
}

if (age >= 18 && age <= 59) {
  console.log("Ти дорослий");
}

if (age >= 60) {
  console.log("Ти пенсіонер");
}

if (age <= 0) {
  console.log("Ти ще не народився");
}

// Task 2
//**Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д). */

const number = +prompt("Вкажіть число від 0-9");

switch (number) {
  case 0:
    console.log(")");
    break;

  case 9:
    console.log("(");
    break;
  case 8:
    console.log("*");
    break;

  case 7:
    console.log("&");
    break;
  case 6:
    console.log("^");
    break;

  case 5:
    console.log("%");
    break;
  case 4:
    console.log("$");
    break;
  case 3:
    console.log("#");
    break;

  case 2:
    console.log("@");
    break;
  case 1:
    console.log("!");
    break;

  default:
    console.log("Вказане не вірне число");
    break;
}

// Task 3
//**Підрахуй суму всіх чисел в заданому користувачем діапазоні. */

const a = +prompt("Вкажіть нижнью границю діапазону");
const b = +prompt("Вкажіть верхнью границю діапазону");

let sum = 0;

for (let i = a; i <= b; i++) {
  sum += i;
}

console.log("Сума всіх чисел в діапазоні " + sum);

// Task 4
//** */ Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const firstNumber = Number(prompt("Введіть перше число: "));

const secondNumber = Number(prompt("Введіть друге число: "));

let ncd = 1;

// Переберемо всі числа від 1 до меншого з двох чисел
for (let i = 1; i <= Math.min(firstNumber, secondNumber); i++) {
  // Якщо перше число і друге число діляться на i без залишку, то це найбільший спільний дільник
  if (firstNumber % i === 0 && secondNumber % i === 0) {
    ncd = i;
  }
}

console.log("Найбільший спільний дільник: " + ncd);

// Task 5

// ** Запитай у користувача число і виведи всі дільники цього числа.*/

// Запитаємо у користувача число
const num = Number(prompt("Введіть число: "));

// Виведемо всі дільники
for (let i = 1; i <= num; i++) {
  // Якщо число ділиться на i без залишку, то це дільник
  if (num % i === 0) {
    console.log(i);
  }
}

export { num, ncd, sum, number, age };
