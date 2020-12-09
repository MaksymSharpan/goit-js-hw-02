// country1 = "Китай";
// country2 = "Чили"
// country3 = "Австралия"
// country4 = "Индия"
// country5 = "Ямайка"

// price1 = 100;
// price2 = 250;
// price3 = 170;
// price4 = 80;
// price5 = 120;

let country = prompt('Укажите вашу страну:');
let price = '';
country = country.toLowerCase();

switch (country) {
  case 'китай':
    price = '100';
    break;
  
  case 'чили':
    price = '250';
    break;
  
  case 'австралия':
    price = '170';
    break;
  
  case 'индия':
    price = '80';
    break;
  
  case 'ямайка':
    price = '120';
    break;
  
  default:
    alert('В вашей стране доставка не доступна');
    break;
}

console.log (`Доставка в ${country} будет стоить ${price} кредитов`)