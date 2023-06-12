function task001() {
    let film = "Властелин колец"
    let temp = prompt("Угадайте мой любимый фильм.", "Введите название фильма")
    while (temp != film) {
        alert("Попробуйте еще раз.")
        temp = prompt("Угадайте мой любимый фильм.", "Введите название фильма")
    }
    alert("Вы угадали!")
}

function task002() {
    let arr = [3, 7, 9, 1, 11]
    document.write(`<b>Исходный массив: </b> ${arr}`)
    function compareNumeric(a, b) {
        if (a > b) return 1
        if (a == b) return 0
        if (a < b) return -1
    }
    arr.sort(compareNumeric)
    document.write("<br>")
    document.write(`<b>Массив после сортировки: </b>${arr.reverse()}`)
}