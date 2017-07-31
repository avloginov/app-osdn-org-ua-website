#!/usr/bin/env node

var agenda = [
  {"title": 'Синий зал',
    data: [
      {key: 1, time: '9:30- 9:40', speaker: '',
          title: 'Открытие конференции'},
      {key: 2, time: '9:40- 10:00', speaker: 'Andy Shevchenko',
          title: 'Typical mistakes when submitting a new code to linux kernel.'},
    ]},
  {title: 'Coffee break',
    data: [
      {key: 3, time: '10:15- 11:00', speaker: 'Andrzej Pietrasiewicz',
          title: 'Make your own USB gadged'},
      {key: 4, time: '11:00- 12:00', speaker: 'Krzysztof Opasiak',
          title: 'USB attacks explained'},
      {key: 5, time: '12:00- 12:30', speaker: 'Denis Dovgopoliy',
          title: 'Как слепить MVP продукта из говна и палок используя опенсорс решения или почему нельзя писать самому код ?'}
    ]},
  {title: 'Розовый зал',
    data: [
      {key: 21, time: '9:40- 10:00', speaker: 'Alex Radetsky',
          title: 'Как я слепил менее чем за сутки мобильное приложение используя React Native?'},
    ]},
];

console.log(JSON.stringify(agenda));

