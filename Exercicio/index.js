
let button = window.document.querySelector('div#button')
button.addEventListener('touchstart' , clicar)
button.addEventListener('mouseclick' , clicar)

function clicar(){
button.style.border = '5px solid white'

let painel = window.document.querySelector('input#painel')

function isVerificar(n){
    if(n.length == 0){
        return true
    }else{
        return false
    }
}

if(isVerificar(painel.value) && true){
    window.alert('teste')
}else{


    let n = Number(painel.value)

    let tabela = window.document.getElementById('box1')

    tabela.innerHTML = ''
    
    for(let c = 1; c <= 10; c++){
        let opt = document.createElement('option')
        opt.text = `${n} * ${c} = ${n*c}`
        tabela.appendChild(opt)
    }
    

}

} 