let credits = 23580;
const pricePerDroid = 3000;

let totalPrice;

const userInput = prompt('Сколько Дроидов Вы бы хотели приобрести?');
console.log(Number(userInput));
// if (userInput === null) {
//   сonsole.log('Отменено пользователем!')
// }

totalPrice = userInput * pricePerDroid;
console.log(Number(totalPrice));

const ecuation = credits - pricePerDroid * userInput;
if (totalPrice > credits) {
  console.log(`Недостаточно средств на счету! Не хватает ${ecuation} кредитов`);
} else if (userInput === null) console.log('Отменено пользователем!');
else {
  console.log(
    `Вы купили ${userInput} дроидов, на счету осталось ${ecuation} кредитов.`,
  );
}
