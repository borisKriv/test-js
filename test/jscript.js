'use strict';
let money= prompt("Ваш бюджет а месяц","");
let time= prompt("Введите дату в формате YYYY-MM-DD","");
let state=prompt("Введите обязательную статью расходов в этом месяце","");
let cost = prompt ("Во сколько обойдется?","");
let appData = {
    budget:money,
    timeData:time,
    expenses : {
        state : cost
    },
    optionalExpenses:null,
    income:null,
    savings:false
};
alert(appData.budget / 30);