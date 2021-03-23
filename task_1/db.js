let money = prompt("Ваш бюджет на месяц?")
let time = prompt("Введите дату в формате YYYY-MM-DDDD")
let appData = {
    budget: money,
    timeData:time,
    expenses:null,
    optionalExpenses:null,
    income: null,
    savings:false
};
let question = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");
var expenses = {
    question:question2
};
alert("Бюджет на 1 день: " +appData.budget/30);