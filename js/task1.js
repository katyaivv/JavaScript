// Дана масса в килограммах. Найти число полных центнеров в ней.
// {
//     let kg , cent;
//     kg = parseInt(prompt('ведити количество килограм', 0));
//     cent = Math.round(kg / 100);
//     alert(cent)
// }


// Дано трехзначное число. В нем зачеркнули последнюю справа цифру и при-
// писали ее в начале. Найти полученное число.
// {
//     let n, num_last;
//     n = prompt('введите трехзначное число', 0)
//     num_last = n % 10;
//     n = Math.floor(n / 10)
//     alert(num_last.toString() + n.toString());
// }

// Известны два расстояния: одно в километрах, другое — в футах
// (1 фут  = 0,305 м). Какое из расстояний меньше?
// {
//     let km, f, f_km;
//     km = parseInt(prompt('км', 0))
//     f = parseInt(prompt('фунты', 0))
//     f_km = (f * 0.305) / 1000
//     if (km > f_km){
//         alert('меньше расстояние в фунтах')
//     }
//     if (km < f_km){
//         alert('меньше расстояние в километрах')
//     }
// }

// Дано трехзначное число.
// а) Верно ли, что все его цифры одинаковые?
// {
//     let num, n1, n2, n3;
//     num = parseInt(prompt('введите трехзначное число', 0));
//     n1 = Math.floor(num / 100);
//     n2 = Math.floor(num / 10 % 10);
//     n3 = num % 10;

//     if (n1 == n2 == n3){
//         alert('YES')
//     }
//     else{
//         alert('NO')
//     }
// }


// Найти:
// г) среднее арифметическое всех целых чисел от a до b (значения a и b вводятся с клавиатуры; b =>a).
// {
//     let a, b, coun, sred, s;
//     coun = 0
//     s = 0
//     a = parseInt(prompt('от', 0))
//     b = parseInt(prompt('до', 0))
//     while (a <= b){
//         coun += a;
//         ++a
//         ++s
//     }
//     sred = coun / s;
//     alert(sred)
// }

// Дано натуральное число. Определить:
// г) сколько раз в нем встречаются цифры x и y.
// {
//     let num, coun_x, coun_y, x, y;
//     coun_x = 0
//     coun_y = 0
//     num = parseInt(prompt('введите число', 0))
//     x = parseInt(prompt('введите число x', 0))
//     y = parseInt(prompt('введите число y', 0))
//     while (num > 0){
//         if (num % 10 == x){
//             ++coun_x
//         }
//         if (num % 10 == y){
//             ++coun_y
//         }
        
//         num = Math.floor(num / 10)
//     }
//     console.log('x встречается ' + coun_x )
//     console.log('y встречается ' + coun_y)
// }

// Известны оценки ученика по 10 предметам. Определить среднюю оценку.
{
    let num, sum, sr, a;
    num = 1;
    sum = 0;
    while (num <= 10){
        a = parseInt(prompt('введите оченку по вредмету' + num, 0))
        sum += a;
        ++num;
    }
    sr = sum / 10
    alert(sr)
}