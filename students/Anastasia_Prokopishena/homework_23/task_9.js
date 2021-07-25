let capitalUse = prompt('Столица США? 1 - Вашингтон 2 - Нью-йорк 3 - Лондон');
let capitalArgentina = prompt('Столица Аргентины? 1-Сантьяго 2 - Буенос Айрес 3 - Оттава');
let capitalNewZealand = prompt('Столица Новой Зеландии? 1 - Оттава 2 - Канберра 3 - Веллингтон');
let score = 0;
if(capitalUse == 1)
        score += 2;
if (capitalArgentina == 2)
        score += 2;
    if (capitalNewZealand == 3)
        score += 2;
alert('Ваши балы - ' + score);