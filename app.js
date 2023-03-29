function generate() {
    const element = '!#$%&*+,-./:;@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let passwordLenght = 20;
    var password = "";

    for (let i = 0; i < passwordLenght; i++) {
        var random = Math.floor(Math.random() * element.length)
        password += element.substring(random, random + 1)
        
        passwordLenght = selectSizeMdp.value;
    }
    
    var text = document.querySelector('.titre');
    text.innerHTML = password;
}

var selectSizeMdp = document.createElement('input')
selectSizeMdp.type = 'number'
selectSizeMdp.min = '15'
selectSizeMdp.max = '25'

Object.assign(selectSizeMdp.style,{
    width: "40px",
    height: "20px",
    margin: "0",
    
});

const container = document.querySelector('.mdp')



container.appendChild(selectSizeMdp)

fetch('http://localhost:1337/api/utilisateurs/?populate=*')
    .then(res => res.json())
    .then(user => {
        user.data.forEach(element => {
            console.log(element)
            const username = element.attributes.name
            const usermail = element.attributes.mail
            const userPassword = element.attributes.password


            const submitBtn = document.querySelector('#submitBtn');

            submitBtn.addEventListener('click', submitForm);
            function submitForm() {
                const email = document.querySelector('#email').value;
                const mdp_pass = document.querySelector('#motDePasse').value;
                if (email == usermail) {
                    console.log('mail ok')
                } else if (mdp_pass == userPassword) {
                    console.log('mdp ok')
                }

                /*              
                              if (mdp_pass == userPassword) {
                                  console.log('mdp ok')
                              } else {
                                  console.log('mdp non ok')
                              }
              */
                if (email == usermail && (mdp_pass == userPassword)) {
                    console.log(`Bienvenue ${username}`)
                }
            }
        });






    })
