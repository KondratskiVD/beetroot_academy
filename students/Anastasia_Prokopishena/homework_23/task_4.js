let year = prompt('Введите год');
if(year %400 && year %4){
    console.log('Високосный год');
} else if (year %100) {
    console.log('Невисокосный год');
}