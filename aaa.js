var x;// x ir masīva elementa indeks

var cipari = ["ноль", "раз", "два", "три", "четыре",
            "пять", "шесть", "семь", "восемь", "девять", 
            "десять", "одиннадцать", "двенадцать", 
            "тринадцать", "четырнадцать", "пятнадцать", 
            "шестнадцать", "семнадцать", "восемнадцать",
            "девятнадцать", "двадцать", "двадцать один",
            "двадцать два", "двадцать три"];

function izveidot(){
    x = Math.floor(Math.random() * 23);
    izvade.innerHTML = cipari[x];
}

function tests(){
    if(x == ievade.value) {
        izvade.innerHTML = "Pareizi";
    } else {
        izvade.innerHTML = "Nepareizi";
    }
        ievade.value = " ";
}