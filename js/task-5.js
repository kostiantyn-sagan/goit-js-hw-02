/*Функция предикат

Функция предикат возвращает true или false

Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.Функция проверяет ее на содержание слов spam и sale.Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.*/

function checkForSpam(str) {
  'use strict';
  // Write code under this line
  const blacklistedWord1 = 'spam';
  const blacklistedWord2 = 'sale';
  const normalizedStr = str.toLowerCase();

  return (
    normalizedStr.includes(blacklistedWord1) ||
    normalizedStr.includes(blacklistedWord2)
  );
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

/*Код должен содержать функцию

Результатом вызова функции должен быть булеан

Результатом вызова функции должна false, если аргумент - пустая строка

Для аргумента - строки 'Latest technology news' результатом будет false

Для аргумента - строки 'JavaScript weekly newsletter' результатом будет false

Для аргумента - строки 'Get best sale offers now!' результатом будет true

Для аргумента - строки '[SPAM] How to earn fast money?' результатом будет true

Ожидается использование метода '.includes'

Ожидается использование метода '.toLowerCase'*/
