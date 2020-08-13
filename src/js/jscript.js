'use strict';
let money;
let time;

let appData = {
    budget:money,
    timeData:time,
    expenses : {
    },
    optionalExpenses:{},
    savings:false,
    income:[],
};
let butStart = document.querySelector("#start"),
    firstsBlocks= document.querySelector('.budget-value'),
    budgetValue= document.querySelector('.budget-value'),
    daybudget= document.querySelector('.daybudget-value'),
    level= document.querySelector('.level-value'),
    expenses= document.querySelector('.expenses-value'),
    optionalExpenses= document.querySelector('.optionalexpenses-value'),
    income= document.querySelector('.income-value'),
    monthSavings= document.querySelector('.monthsavings-value'),
    yearSavings= document.querySelector('.yearsavings-value'),

    expInputs= document.querySelectorAll('.expenses-item'),
    expBtn = document.querySelectorAll("button")[0],
    optBtn = document.querySelectorAll("button")[1],
    calcBtn = document.querySelectorAll("button")[2],
    year= document.querySelector('.year-value'),
    month= document.querySelector('.month-value'),
    day= document.querySelector('.day-value'),
    posIncome= document.querySelector('.choose-income'),
    saveCheck = document.querySelector('#savings'),
    sumValue= document.querySelector('.choose-sum'),
    percentValue= document.querySelector('.choose-percent'),
    optInputs= document.querySelectorAll('.optionalexpenses-item');

    expBtn.disabled=true;
    optBtn.disabled=true;
    calcBtn.disabled=true;
butStart.addEventListener('click',function(){
    do {
        money= +prompt("Ваш бюджет а месяц","");
        console.log(money);
        time= prompt("Введите дату в формате YYYY-MM-DD","");
        }while(money<=0 || money==null|| isNaN(money))
    appData.budget = money;
    appData.timeData = time;
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value= new Date(Date.parse(time)).getMonth()+1;
    day.value= new Date( Date.parse(time)).getDate();
    budgetValue.textContent = money.toFixed();
    expBtn.disabled=false;
    optBtn.disabled=false;
    calcBtn.disabled=false;
});
expBtn.addEventListener('click' , function() {
    let sum=0;

    for(let i=0;i < expInputs.length; i++){
        let state= expInputs[i].value;
        let cost = +expInputs[++i].value;
        if((typeof(state)) != null && (typeof(cost))!= null && state!='' &&  cost!='' && state.length <50){
        sum+=cost;
        appData.expenses[state]=cost;
        console.log(cost,sum);
        
        }
    }
    expenses.textContent=sum;
    });

optBtn.addEventListener('click' , function() {
    for(let i=0;i<optInputs.length; i++){
        let state = optInputs[i].value;
        if( (typeof(state))!= null && state!='' ){
        appData.income[i]=state;
        optionalExpenses.textContent+=state+" ";
        }
    }
    
});
calcBtn.addEventListener('click', function(){
    if(Number.isInteger(appData.budget)){
        let sumExp = 0;
        for(let key in appData.expenses){
            sumExp += appData.expenses[key];
        }
        appData.moneyPerDay=((appData.budget - sumExp) / 30).toFixed();
        daybudget.textContent= appData.moneyPerDay;
        if(appData.moneyPerDay<100){
            level.textContent="Ваш достаток низкий";
        }
        else if(appData.moneyPerDay>100 && +appData.moneyPerDay<1000){
            level.textContent="Нормуль";
        }
        else if(appData.moneyPerDay>1000){
            level.textContent="Ебать ты мажор";
        }
        else {
            level.textContent="Чиво блять?";
        }
    }
    else{
        daybudget.textContent= 'Сначала нажмите "Начать расчет"';
    }
});
posIncome.addEventListener('input', function(){
    let items;
    items= posIncome.value;
    appData.income=items.split(", ");
    income.textContent=appData.income;
});
saveCheck.addEventListener('click', function(){
    appData.savings=!appData.savings;
    if(percent.value!="" &&sum.value!='' && appData.savings){
        let sum= +sumValue.value;
        let percent= +percentValue.value;
        appData.yearSavings=((sum/100)*percent).toFixed();
        appData.monthSavings=(((sum/100)*percent)/12).toFixed();
        yearSavings.textContent=appData.yearSavings;
        monthSavings.textContent=appData.monthSavings;
    }
});

sum.addEventListener('input',function(){
    if(percent.value!="" &&sum.value!='' && appData.savings){
        let sum= +sumValue.value;
        let percent= +percentValue.value;
        appData.yearSavings=((sum/100)*percent).toFixed();
        appData.monthSavings=(((sum/100)*percent)/12).toFixed();
        yearSavings.textContent=appData.yearSavings;
        monthSavings.textContent=appData.monthSavings;
    }
});
percent.addEventListener('input',function(){
    if(percent.value!="" &&sum.value!='' && appData.savings){
        let sum= +sumValue.value;
        let percent= +percentValue.value;
        appData.yearSavings=((sum/100)*percent).toFixed();
        appData.monthSavings=(((sum/100)*percent)/12).toFixed();
        yearSavings.textContent=appData.yearSavings;
        monthSavings.textContent=appData.monthSavings;
    }
});