// Задание №1 Вычислить результат 158+2 и вывести значение выражения в диалоговое окно.
function task001() {
    alert("158 + 2 = " + (158 + 2))
}

function task002() {
    let name = prompt("Как Вас зовут?", "Имя")
    alert("Привет, " + name + "!")
}

function task003() {
    let name = prompt("Введите имя: ")
    function helloMessage(value) {
        let message = "Привет " + name
        alert(message)
    }
    helloMessage(name)
}

function task004() {
    let result = confirm("Вы уверены?")
    if (result) {
        alert("Мы рады, что Вы уверены!")
    } else {
        alert("Жаль, что Вы не уверены…")
    }
}

function task005() {
    let age = parseInt(prompt("Укажите возраст: "))
    switch (age) {
        case 18:
            alert('Вы совершеннолетний, все можно!')
            break
        case 10:
            alert('Вам надо учить уроки!')
            break
        case 30:
            alert('Ложитесь спать, завтра на работу')
            break
        default:
            alert('Мы не знаем что Вам делать')
            break
    }
}

function task006() {
    let arr = [3, 7, 9, 1]
    function compareNumeric(a, b) {
        if (a > b) return 1
        if (a == b) return 0
        if (a < b) return -1
    }
    arr.sort(compareNumeric)
    document.write(arr.reverse())
}

function task007() {
    let arr = ["a", "b", "c"]
    document.write(arr)
    document.write("<br>")
    arr.splice(0, 3, "Слово", "Предложение вместо второго элемента", "г")
    document.write(arr)
}

function task008() {
    let arr = [2, 10, 18, 22]
    document.write(arr)
    document.write("<br>")
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 1
    }
    document.write(arr)
}