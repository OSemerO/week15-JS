//Задание 1
// Выведите числа от 1 до 10 в консоль

let i = 1;
while (i <= 10) {
  console.log(i)
  i++
};

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

for(let num = 1; num < 100; num+=2) console.log(num);

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.sort((a, b) => b - a));

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

function multiTable() {
  let n = 5;
  let table = '<table border="1">';
  table += '<tr><th colspan="2">' + n + '</th></tr>';
  for(let i = 1; i <= 10; i++) {
      table += '<tr><td>' + i + ' x ' + n + '</td><td>' + i * n + '</td></tr>';
  }
  table += '</table>';
  document.body.insertAdjacentHTML('afterBegin', table);
}

multiTable();
 

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль

let sum = 1;
for (let i = 1; i <= 100; i++) {
 sum += i;
}
console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];

for (let i = 0; i <= array.length - 1; i++) {
	console.log(array[i]);
};

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}
console.log(result);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

let animals = ["Кот", "Рыба", "Лемур"];
    
    for (let i = 0; i < animals.length; i++) {
      animals[i] = animals[i] + " - прекрасное животное";
    }
    console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';

const logEachLetter = str => str.toString().split('')
console.log(logEachLetter(str));

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6

for(const number of array) {
    console.log(number);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];

let str1 = String(sentences);
let splitSentences = str1.split('');

console.log(splitSentences);


//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. const numbers = [1, 2, 3, 4, 5];

let total = 0;

for (let number of numbers) {
  total += number;
}
console.log(`Сумма элементов массива: ${total}`);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];

let lengths = list.map(item => item.length);
console.log(lengths);

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

console.log(words.map(e => e.toUpperCase()));

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

const vowels2 = s => s.split("").filter(c => "aeiou".includes(c)).length;
 
console.log(vowels2(greeting));

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];

console.log(words.join(' '));

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while

let k = 1;
while (k <= 10) {
  console.log(k)
  k++
};

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while

let num = 10;

while (num == 1) {
	num = num - 1;
}

console.log(num); 

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

let b = 0;

while (allPositive && b < allNumbers.length) {
  if (allNumbers[b] > 0) {
  allPositive = false;
  break;
  }
  b++;
}

console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];

let v = 0;

do {
console.log(random[v]);
v++;
}
while (random[v] > 0)

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

v = 0;

do {
  if (v % 2 === 0) console.log(v)
  v++;
}
while ( v < 101)

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

let askNum = prompt('введите число');

do {
  console.log(askNum);
  let summa = +askNum + +askNum;
  console.log('сумма =', summa);
} while ( summa <= 100 )

// function getSum() {
//   let sum = 0; 
//   while (sum < 100) { // цикл выполняется до тех пор, пока сумма меньше 100
//     let input = Number(prompt("Введите число: ")); 
//     sum += input; 
//   }
//   return sum; 
// }


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

const headers = document.querySelectorAll('h4');
for (let head of headers) {
head.className = head.className + 'blue';
}

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet

let abc = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomAbc = abc[Math.floor(Math.random() * abc.length)];
let newAbc = "";
while (newAbc.length < 6) {
  console.log(newAbc += randomAbc);
  randomAbc = abc[Math.floor(Math.random() * abc.length)];
}
