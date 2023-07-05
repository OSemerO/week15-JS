
// массив с городами
let cities = ['Москва', 'Санкт-Петербург','Калининград','Токио','Хельсинки'];

// массив, куда будет "складываться" информация о температуре
let temperatures = [];


// Перебираем массив городов с помощью цикла for
for (let city of cities) {
  // Используем prompt() для запроса у пользователя температуры
  const temperature = prompt(`Введите температуру в городе ${city} (в градусах Цельсия):`);

  // Если пользователь не ввел температуру, выводим сообщение об ошибке
  if (!temperature) {
    alert("Ошибка: не введена температура");
    continue;
  }

// Добавляем температуру в массив температур
  temperatures.push(temperature);
}

// Выводим список городов и их температур в консоль
console.log("Список городов и температур");
console.table(cities.map((city, index) => [city, temperatures[index]]));

// Находим максимальную и минимальную температуры
const maxTemperature = Math.max(...temperatures);
const minTemperature = Math.min(...temperatures);

// Отображаем информацию о погоде в разных городах
console.log(`Максимальная температура: ${maxTemperature}°C`);
console.log(`Минимальная температура: ${minTemperature}°C`);

// собираем данные вместе и выводим на html страницу 

document.querySelector('.city__name').innerText = `1. ${cities[0]} 
  2. ${cities[1]}     
  3. ${cities[2]}    
  4. ${cities[3]}   
  5. ${cities[4]}`;

document.querySelector('.city__temperature').innerHTML = `${temperatures}`;  

document.querySelector('.city__max-temperature').innerHTML = `Максимальная температура: ${maxTemperature}°C`; 

document.querySelector('.city__min-temperature').innerHTML = `Минимальная температура: ${minTemperature}°C`; 

