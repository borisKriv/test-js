'use strict';
let money;
let time;
function start() {
    do {
    money= +prompt("Ваш бюджет а месяц","");
    console.log(money);
    time= prompt("Введите дату в формате YYYY-MM-DD","");
    }while(money<=0 || money==null|| isNaN(money))
}
start();
let appData = {
    budget:money,
    timeData:time,
    expenses : {
    },
    optionalExpenses:{},
    income:null,
    savings:false
};
function chooseExpenses(){
for(let i=0;i<2; i++){
    let state= prompt("Введите обязательную статью расходов в этом месяце","");
    let cost = prompt ("Во сколько обойдется?","");
    if(typeof(state)==="string" & state!="" && typeof(state)!= null && cost!="" && typeof(cost)!= null && state.length < 50 ){
    appData.expenses[state]=cost;
    }
    else{
        console.log("Введены не верные данные");
        i--;
    }
    };
}
function detectDayBudget() {
    appData.moneyPerDay=(appData.budget / 30).toFixed();
    return appData.moneyPerDay;
}
function detectLevel(){
    if(+detectDayBudget()<100){
        alert("Ваш достаток низкий");
    }
    else if(+detectDayBudget()>100 && +detectDayBudget()<1000){
        alert("Нормуль");
    }
    else if(+detectDayBudget()>1000){
        alert("Ебать ты мажор");
    }
    else {
        alert("Чиво блять?");
    }
   
}
function chooseOptExpenses(){
    for(let i=1; i<=3; i++){
        appData.optionalExpenses[i.toString()]=prompt("Статья необязательных расходов?","");
    }
}
chooseOptExpenses();
 detectLevel();
chooseExpenses();
alert("Бюджет на день "+ detectDayBudget());

