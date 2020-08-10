/*Поиск самого длинного слово в строке с пробелами

Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.*/

function findLongestWord(string = '') {
  // Write code under this line
  let longestWord = '';
  const wordsList = string.split(' ');

  for (const word of wordsList) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

/*1. Код должен содержать функцию findLongestWord

Результатом вызова функции должна быть строка

Результатом вызова функции должна быть пустая строка, если аргумент - пустая строка

Для строки 'The quick brown fox jumped over the lazy dog' самое длинное слово должно быть 'jumped'

Для строки 'Google do a roll' самое длинное слово должно быть 'Google'

Для строки 'May the force be with you' самое длинное слово должно быть 'force'

Ожидается использование метода 'split'

Ожидается использование цикла 'for'*/
