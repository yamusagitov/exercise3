let money, time;

function start() {
    money = +prompt("Ваш бюжет на месяц?", ''); //+ перед prompt ставится для преобразования строки в число
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) { //isNan проверяет, что это не цифры. True, если не цифры
        money = +prompt("Ваш бюжет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

let a, b;

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    };
}
chooseExpenses();


appData.moneyPerDay = (appData.budget / 30).toFixed(1);

alert("Ежедневный бюджет: " + appData.moneyPerDay);


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

// Задание 3;

// 1)
function detectDayBudget() {
    alert("Дневной бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

// 2)
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
        alert ("Вы имеете минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
        alert("Вы имеете средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
        alert("Вы имеете высокий уровень достатка");
    } else {
        console.log("Произошла ошибка")
    }
}
detectLevel();

// 3)
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let x = prompt("Статья необязательных расходов", ''),
            y = +prompt("Во сколько обойдется?", '');

        if ((typeof (x)) === 'string' && (typeof (x)) != null && (typeof (y)) != null &&
            x != '' && y != '' && x.length < 50) {
            console.log("done");
            appData.optionalExpenses[x] = y;
        } else {
            i = i - 1;
        }
    };
}
chooseOptExpenses();
