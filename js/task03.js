const ADMIN_PASSWORD = "jqueryismyjam";
let message;


const userInput = prompt("Введите пароль:");

console.log(userInput);
if (userInput === ADMIN_PASSWORD) {
  let message = alert ('Добро пожаловать!')
}

else if (userInput === null) {
  alert('Досвидули!')
}
else { message = alert('Доступ запрещен, неверный пароль!') }



