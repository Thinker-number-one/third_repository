let out = document.querySelector('#one');

let number = prompt('Введите число!');
if(number >= 100) {
    out.innerHTML = number;
}
else {
    console.log(number);
}