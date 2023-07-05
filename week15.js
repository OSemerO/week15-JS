let cities = ['Москва', 'Санкт-Петербург','Калининград','Токио','Хельсинки','Таллин','Сеул','Астана','Пекин'];
let temp = [];


for (let i = 0; i < cities.length; i++) {
  const city = cities[i];
  const temperature = prompt(`Введите температуру в ${city} (в градусах Цельсия):`);
  console.log(`Город ${city}: температура ${temperature} градусов Цельсия`);
}