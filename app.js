function generate(){
    const element = '!#$%&*+,-./:;@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const passwordLenght = 20;
    var password = "";

    for(let i = 0; i < passwordLenght; i++){
        var random = Math.floor(Math.random() * element.length)
        password += element.substring(random, random + 1)
    }
    const text = document.querySelector('.titre');
    text.innerHTML = password;
}