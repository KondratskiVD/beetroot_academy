let amount = prompt('Введите количество USD', 0);
let currency = prompt('EUR = 1, UAH = 2, AZN = 3', 0);
switch(currency){
    case '1' :
        console.log(amount*0,85 + 'EUR');
    case '2' :
        console.log(amount*27,20 + 'UAH');
    case '3' :
        console.log(amount*1,70 + 'AZN');
}
