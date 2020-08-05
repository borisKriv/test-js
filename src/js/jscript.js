'use strict';
let money;
let time;
// function start() {
//     do {
//     money= +prompt("Ваш бюджет а месяц","");
//     console.log(money);
//     time= prompt("Введите дату в формате YYYY-MM-DD","");
//     }while(money<=0 || money==null|| isNaN(money))
// }
// start();
let appData = {
    budget:money,
    timeData:time,
    expenses : {
    },
    optionalExpenses:{},
    income:null,
    savings:false,
    income:[],
    chooseExpenses: function() {
        for(let i=0;i<2; i++){
            let state= prompt("Введите обязательную статью расходов в этом месяце","");
            let cost = prompt ("Во сколько обойдется?","");
            if(typeof(state)==="string" & state!="" && typeof(state)!= "null" && cost!="" && typeof(cost)!= "null" && state.length < 50 ){
            appData.expenses[state]=cost;
            }
            else{
                console.log("Введены не верные данные");
                i--;
            }
            };
    },
    detectDayBudget: function() {
        appData.moneyPerDay=(appData.budget / 30).toFixed();
        return appData.moneyPerDay;
    },
    detectLevel: function(){
        if(+this.detectDayBudget()<100){
            alert("Ваш достаток низкий");
        }
        else if(+this.detectDayBudget()>100 && +this.detectDayBudget()<1000){
            alert("Нормуль");
        }
        else if(+this.detectDayBudget()>1000){
            alert("Ебать ты мажор");
        }
        else {
            alert("Чиво блять?");
        }
    },
    chooseOptExpenses: function(){
        for(let i=1; i<=3; i++){
            appData.optionalExpenses[i.toString()]=prompt("Статья необязательных расходов?","");
        }
    },
    chooseIncome:function(){
        let items;
        do{
        items= prompt("Что принесет вам доход?(Перечислите через запятую)","");
        }while(items==null || typeof(items)!=="string"|| items=="")
        this.income=items.split(", ");
        this.income.sort();
        do{
            items= prompt("Может что-то еще?","");
            }while(items==null || typeof(items)!=="string"|| items=="")
        this.income.push(items);
        this.income.sort();
        this.income.forEach(function(item,i){
            alert("Способы доп. заработка: "+ (1+i) +" - "+item);
        });
        for (let key in appData){
            alert("В обьекте  appData есть " + key + " - " + appData[key]);
        }
    }
};
let butStart = document.querySelector("#start"),
    firstsBlocks= document.querySelectorAll('*[class$="-value"]'),
    inputs= document.querySelectorAll('.expenses-item'),
    approve1 = document.querySelectorAll("button")[0],
    approve2 = document.querySelectorAll("button")[1],
    calc = document.querySelectorAll("button")[2],
    data= document.querySelectorAll('input[class$="-value"]'),
    posIncome= document.querySelector('.choose-income'),
    accum = document.querySelector('#savings'),
    summ= document.querySelector('.choose-sum'),
    percent= document.querySelector('.choose-percent'),
    optExpecs= document.querySelectorAll('.optionalexpenses-item');

console.log(firstsBlocks);
console.log(butStart);
console.log(inputs);
console.log(approve1);
console.log(approve2);
console.log(calc);
console.log(data);
console.log(posIncome);
console.log(accum);
console.log(summ);
console.log(percent);
console.log(optExpecs);
