let buy = prompt('Введите сумму покупки', 0);
let discount = buy;
if (buy >=200 && buy <300 )  {
    discount = buy*0.03
    console.log(buy-discount);
} else
if (buy >=300 && buy <500 )  {
    discount = buy*0.05
    console.log(buy-discount);
} else
if (buy >=500 )  {
    discount = buy*0.07
    console.log(buy-discount);
}