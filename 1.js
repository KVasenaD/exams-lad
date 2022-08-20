var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;
str = str.replace('ПОНЕДЕЛЬНИК', 'MONDAY');
str = str.replace('ВТОРНИК', 'TUESDAY');
str = str.replace('СРЕДА', 'WEDNESDAY');
str = str.replace('ЧЕТВЕРГ', 'THURSDAY');
str = str.replace('ПЯТНИЦА', 'FRIDAY');
str = str.replace('СУББОТА', 'SATURDAY');
str = str.replace('ВОСКРЕСЕНЬЕ', 'SUNDAY');
console.log(str);
process.exit();
