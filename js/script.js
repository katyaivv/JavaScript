{
    let a, b, mul;
    a = 5;
    b = 3;
    mul = a * b;
    console.log(mul);
}

// {
//     let photosInFolder, photosOnPage, page;
//     photosInFolder = parseInt(prompt('сколько фото в папке', 0));
//     photosOnPage = parseInt(prompt("сколько помещается", 0));
//     page = Math.ceil(photosInFolder / photosOnPage); 
//     alert('кол-во страниц = ' + page);
// }

// {
//     let price , cunt;
//     price = parseInt(prompt('сколько стоит', 0));
//     cunt = parseInt(prompt('сколько штук', 0));
//     n = price * cunt;
//     alert(n)
// }
{
    let n, n1, n2, n3, n4;
    n = parseInt(prompt('введите четырехзначное число', 0))
    n4 = n % 10;
    n3 = Math.floor(n / 10 % 10)
    n2 = Math.floor(n / 100 % 10)
    n1 = Math.floor(n / 1000)
    console.log(n1, n2, n3, n4);
}

