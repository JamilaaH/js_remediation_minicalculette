// 1
let input1Exo1 = document.querySelector('#exo-1').querySelector('input')
let input2Exo1 = document.querySelector('#exo-1').querySelectorAll('input')[1]
let btnExo1 = document.querySelector('#exo-1').querySelector('.btn')
let reponse = document.querySelector('#response1')

let addition = () => {
    let nb1 = parseInt(input1Exo1.value)
    let nb2 = parseInt(input2Exo1.value)
    reponse.innerHTML = nb1 + nb2
}

btnExo1.addEventListener('click', addition)

//2
let input1Exo2 = document.querySelector('#exo-2').querySelector('input')
let input2Exo2 = document.querySelector('#exo-2').querySelectorAll('input')[1]
let btnOpe = document.querySelector('#exo-2').querySelector('.btn')
let btnEgale = document.querySelector('#exo-2').querySelectorAll('.btn')[1]
let reponse2 = document.querySelector('#response2')

// console.log(typeof btnOpe.value);
btnEgale.addEventListener('click', ()=> {
    let nb1 = parseInt(input1Exo2.value)
    let nb2 = parseInt(input2Exo2.value)
    let op = btnOpe.value

    switch (op) {
        case (op  = "+"):
            reponse2.innerHTML = nb1 + nb2            
            break;
        case (op  = "-"):
            reponse2.innerHTML = nb1 - nb2            
            break;
        case (op  = "/"):
            reponse2.innerHTML = nb1 / nb2            
            break;
        case (op  = "*"):
            reponse2.innerHTML = nb1 * nb2            
            break;
        default:
            break;
    }
})


//3 
let myDiv = document.querySelector('#operatorsExo3')
let op = myDiv.querySelector('span')
let btn = myDiv.querySelectorAll('.m-1')
let input1Exo3 = myDiv.querySelectorAll('input')[0]
let input2Exo3 = myDiv.querySelectorAll('input')[1]
let btnEgale3 = myDiv.querySelector('.btn')
let reponse3 = myDiv.querySelector('#response3')


// op.innerHTML = btn.innerHTML
// console.log(op);
//  choix de l'opérateur 
btn.forEach(el => {
    el.addEventListener('click', ()=> {
        op.innerHTML = el.innerHTML
    })
});

btnEgale3.addEventListener('click', ()=> {
    let nb1 = parseInt(input1Exo3.value)
    let nb2 = parseInt(input2Exo3.value)

    let operateur = op.querySelector('i')
    // console.log(operateur);
    // console.log(nb1);
    // console.log(nb2);
    if (operateur.classList.contains('fa-plus')) {
        reponse3.innerHTML = nb1 + nb2;
        
    } else if (operateur.classList.contains('fa-minus')) {
        reponse3.innerHTML = nb1 - nb2;
        
    } else if (operateur.classList.contains('fa-times')) {
        reponse3.innerHTML = nb1*nb2;

    } else if (operateur.classList.contains('fa-divide')) {
        reponse3.innerHTML = nb1/nb2;
    }
})


//4
let btnChiffre = document.querySelector('#numbersExo4').querySelectorAll('.btn')
let btnOperateur = document.querySelector('#operatorsExo4').querySelectorAll('.btn')

let input4 = document.querySelector('#exo-4').querySelector(".form-control")
let input5 = document.querySelector('#exo-4').querySelectorAll(".form-control")[1]

let btnEgal4 = document.querySelector('#exo-4').querySelector('.btn')

