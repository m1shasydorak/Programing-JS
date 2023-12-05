// Task1

//**Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом */

const number = Number(prompt("Введіть п’ятирозрядне число: "));

// Перетворимо число в строку
const numberString = number.toString();

// Визначимо змінну для зберігання результату
let isPalindrome = true;

// Переберемо всі символи числа зліва направо
for (let i = 0; i < numberString.length / 2; i++) {
  // Якщо символи не рівні, то число не є паліндромом
  if (numberString[i] !== numberString[numberString.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

// Виведемо результат
if (isPalindrome) {
  console.log("Число " + number + " є паліндромом.");
} else {
  console.log("Число " + number + " не є паліндромом.");
}

// Task2

//**Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:від 200 до 300 - знижка буде 3%; від 300 до 500 - 5%; від 500 і вище - 7%. */

const purchaseAmount = Number(prompt("Введіть суму покупки: "));

// Визначимо змінну для зберігання суми до оплати
let paymentAmount = 0;

// Визначимо знижку
let discount = 0;

// Якщо сума покупки від 200 до 300
if (purchaseAmount >= 200 && purchaseAmount <= 300) {
  // Знижка 3%
  discount = purchaseAmount * 0.03;
} else if (purchaseAmount >= 300 && purchaseAmount <= 500) {
  // Знижка 5%
  discount = purchaseAmount * 0.05;
} else {
  // Знижка 7%
  discount = purchaseAmount * 0.07;
}

// Визначимо суму до оплати
paymentAmount = purchaseAmount - discount;

// Виведемо суму до оплати
console.log("Сума до оплати зі знижкою: " + paymentAmount);

// Task 3
//**Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем. */

// Визначимо змінні для зберігання статистики
let positiveNumbers = 0;
let negativeNumbers = 0;
let zeros = 0;
let evenNumbers = 0;
let oddNumbers = 0;

// Запитаємо у користувача 10 чисел
for (let i = 0; i < 10; i++) {
  const number = Number(prompt("Введіть число: "));

  // Якщо число додатне
  if (number > 0) {
    positiveNumbers++;
  } else if (number < 0) {
    negativeNumbers++;
  } else {
    zeros++;
  }

  // Якщо число парне
  if (number % 2 === 0) {
    evenNumbers++;
  } else {
    oddNumbers++;
  }
}

// Виведемо статистику
console.log("Кількість додатніх чисел: " + positiveNumbers);
console.log("Кількість від'ємних чисел: " + negativeNumbers);
console.log("Кількість нулів: " + zeros);
console.log("Кількість парних чисел: " + evenNumbers);
console.log("Кількість непарних чисел: " + oddNumbers);

export { number, paymentAmount, discount };
