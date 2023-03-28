function generate() {
    const element = '!#$%&*+,-./:;@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let passwordLenght = 20;
    var password = "";

    for (let i = 0; i < passwordLenght; i++) {
        var random = Math.floor(Math.random() * element.length)
        password += element.substring(random, random + 1)


        if (select.value == 25) {
            passwordLenght = 25;
        } else if (select.value == 15) {
            passwordLenght = 15;
        } else if (select.value == 20) {
            passwordLenght = 20;
        }
    }

    const text = document.querySelector('.titre');
    text.innerHTML = password;
    console.log(passwordLenght)
}








const select = document.createElement('select')
const option = document.createElement('option')
const option2 = document.createElement('option')
const option4 = document.createElement('option')
const option3 = document.createElement('option')
const container = document.querySelector('div')


option.value = ""
option.text = "Taille du mdp"

option2.value = "15"
option2.text = "15 caractères"

option3.value = "25"
option3.text = "25 caractères"

option4.value = "20"
option4.text = "20 caractère"

select.append(option, option2, option4, option3)
container.appendChild(select)
