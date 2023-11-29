//Task 2
//let name;
let userName = "Misha", // Зміна завжди має бути вказана
  lastName,
  firstName,
  uzers_name;

/* //*! The variable is not specitified correctly //
let Name;   
let Uzername;  
let firstname;
*/

/* Task 4
let firstName; // **Camel Case:**
let lastName; // **Pascal Case
let uzers_name; // ** shake_case **
*/

// Task 5
let name = prompt("Ведіть своє імя ");

name = prompt(); // Записуєм імя до зміної

console.log("Привіт," + name);

// Task6

const currentYear = 2023; // Поточний Рік

let birthYear; // Рік народження

birthYear = prompt("Введіть свій рік народження: "); //  *?Записуєм рік народження до зміної

let age = currentYear - birthYear; //** Вираховуєм рік народження

console.log("Вам " + age + " років.");

// Task 7

let sideLength; // Змінна для зберігання довжини сторони квадрата

sideLength = prompt("Введіть довжину сторони квадрата: "); //  *? Вкажіть довжину сторони квадрата

let perimeter = 4 * sideLength; // ** Порахуємо периметр квадрата

// Виведемо периметр квадрата
console.log(
  "Периметр квадрата з довжиною сторони " +
    sideLength +
    " дорівнює " +
    perimeter +
    "."
);

// Task 8

let radius; //Змінна для зберігання радіуса кола

radius = prompt("Введіть радіус кола: "); //  *? Вкажіть радіус кола

let area = Math.PI * radius * radius; // *?  Порахуємо площу кола

console.log("Площа кола з радіусом " + radius + " дорівнює " + area + "."); // ** Виведемо площу кола

// Task 9
let distance; // *? Змінну для зберігання відстані між містами

let travelTime; // *? Визначимо змінну для зберігання часу подорожі

//  *? Запитаємо у користувача відстань між містами
distance = prompt("Введіть відстань між містами в кілометрах: ");

// *? Запитаємо у користувача час подорожі
travelTime = prompt("Введіть час подорожі в годинах: ");

let speed = distance / travelTime; //  ** Порахуємо швидкість

// ** Виведемо швидкість
console.log(
  "Щоб встигнути за " +
    travelTime +
    " годин, необхідно рухатися зі швидкістю " +
    speed +
    " кілометрів на годину."
);

// Task 10

let DOLLAR_TO_EURO = 0.85; //  *? Визначимо константу для зберігання курсу валют

let dollars; // *? Визначимо змінну для зберігання введеної суми в доларах

// *? Запитаємо у користувача суму в доларах
dollars = prompt("Введіть суму в доларах: ");

// ** Переведемо суму в євро
let euros = dollars * DOLLAR_TO_EURO;

//  ** Виведемо суму в євро
console.log("Сума в євро: " + euros);
