let input;
let total = 0;

while (true) {
  input = prompt('Введите число:')
  let number = Number(input);
  total += number;
  console.log(number);

  if (input === null) {
    console.log(total);
    alert(`Общая сумма чисел равна ${total}`)
    break;
  }

  else if (Number.isNaN (number)){
    alert ('Было введено не число, попробуйте еще раз');
  }
}
