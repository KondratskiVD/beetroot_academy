let number = prompt('Введите трёхзначное число');
if( number [0] === number[1] || number [0] === number[2] || number [1] === number[2]) {
    console.log('eсть совпадение чисел');
} else if(number [0] !=number[1] || number [0] !=number[2] || number [1] != number[2]) {
    console.log('совпадений нет');
}