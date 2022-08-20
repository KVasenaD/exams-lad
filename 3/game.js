let number = []; // загаданное число
let currentAttempt = 0; //текущая попытка или сколько попыток уже использованно
let attempts = 0; // всего попыток
let digits = 0; // число цифр
function inputValid() {
  let level = prompt(
    'Игра "Быки и коровы"\n\nЦель игры: угадать число из нескольких различающихся цифр (от 3 до 6).\nВведите желаемый уровень сложности игры от 1 до 4:\nУровень 1 - число состоит из 3 цифр и 10 попыток\nУровень 2 - число состоит из 4 цифр и 8 попыток\nУровень 3 - число состоит из 5 цифр и 6 попыток\nУровень 4 - число состоит из 6 цифр и 5 попыток',
    1,
  );
  //проверка на число
  if (isNaN(parseInt(level))) {
    alert('Вы не ввели число');
    //повторим запрос и проверку
    inputValid();
  } else if (level < 1 || level > 4) {
    alert('Необходимо ввести число от 1 до 4');
    //повторим запрос и проверку
    inputValid();
  } else {
    if (level == 1) {
      digits = 3;
      attempts = 10;
    } else if (level == 2) {
      digits = 4;
      attempts = 8;
    } else if (level == 3) {
      digits = 5;
      attempts = 6;
    } else if (level == 4) {
      digits = 6;
      attempts = 5;
    }
  }
}
inputValid();
generateNumber();
guessNumber();
function generateNumber() {
  number = [];
  let min = 0;
  let max = 9;

  // заполняем массив цифр в числе
  for (let i = 0; i < digits; i++) {
    let part = Math.round(min + Math.random() * (max - min));

    // первое число всегда уникально
    if (i == 0) {
      number[i] = part;
    } else {
      // пока не сгенерируется уникальное число, генерируем новые случайные числа
      while (number.indexOf(part) != -1) {
        part = Math.round(min + Math.random() * (max - min));
      }

      number[i] = part;
    }
  }
}

function guessNumber() {
  let result = prompt('Введите число!\n\nВыход из игры: -1', 0);
  let gameIsRunning = true;

  // пока игрок не угадал число
  while (gameIsRunning) {
    // выход из игры
    if (parseInt(result) == -1) {
      gameIsRunning = false;
    }
    // игрок ввел некорректные данные
    else if (parseInt(result) == 0 || isNaN(parseInt(result))) {
      alert('Вы не ввели число');
      // запрашиваем по новой
      result = prompt('Введите число!\n\nВыход из игры: -1', 0);
    }
    // проверяем число
    else {
      let answer = checkNumber(result);
      if (answer[0]) {
        // число угадано
        alert('Поздравляем! Вы угадали число. Кол-во попыток: ' + attempts);
        // останавливаем игру
        gameIsRunning = false;
      } else if (currentAttempt == attempts) {
        //количество попыток исчерпано
        alert('Проигрыш! Попыток больше нет :(');
        // останавливаем игру
        gameIsRunning = false;
      } else {
        // следующий ход
        result = prompt(
          'совпавших цифр не на своих местах - ' +
            answer[1] +
            ', \nцифр на своих местах - ' +
            answer[2] +
            ', \nосталось попыток: ' +
            +(attempts - currentAttempt) +
            '\nВведите число!\n\nВыход из игры: -1',
          0,
        );
      }
    }
  }
}

function checkNumber(myresult) {
  // каждая проверка увеличивает кол-во попыток на 1
  currentAttempt++;

  // массив результата
  // 0 - общий результат
  // 1 - коровы
  // 2 - быки
  let answer = [false, 0, 0];

  // раскладываем число на разряды
  let ranks = myresult.split('');

  for (let i = 0; i < ranks.length; i++) {
    // если по индексу значения совпадают, то это бык
    if (parseInt(ranks[i]) == number[i]) {
      answer[2]++;
    }
    // если число вообще есть в массиве, то это корова
    else if (number.indexOf(parseInt(ranks[i])) != -1) {
      answer[1]++;
    }
  }

  // если набралось нужное количество быков, то это победа
  if (answer[2] == digits) {
    answer[0] = true;
  }
  return answer;
}
