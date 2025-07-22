let numeroRandom
let meusNumeros = []
let tentativas = 0
let tentativasMaximas = 10

function novoJogo(){
    window.location.reload()
}

function inicio(){
    numeroRandom = Math.floor(Math.random() * 100 + 1)
    //console.log(numeroRandom)
}

function compareNumeros(){
    const numeroNovos = Number(document.getElementById('inputBox').value)
    meusNumeros.push(' ' + numeroNovos)
    document.getElementById('guesses').innerHTML = meusNumeros

    if (tentativas < tentativasMaximas){
    
    if(numeroNovos > numeroRandom){
        document.getElementById('textOutput').innerHTML = 'Seu número é maior'
        document.getElementById('inputBox').value = ''
        tentativas++
        document.getElementById('attempts').innerHTML = tentativas
    }
    else if(numeroNovos < numeroRandom){
            document.getElementById('textOutput').innerHTML = 'Seu número é menor'
             document.getElementById('inputBox').value = ''
             tentativas++
             document.getElementById('attempts').innerHTML = tentativas
    }
    else{
            document.getElementById('textOutput').innerHTML = 'Parabéns você descobriu o número secreto!'
             tentativas++
             document.getElementById('attempts').innerHTML = tentativas
             document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }

    }
    
     else{
            document.getElementById('textOutput').innerHTML ='Você perdeu o jogo! O número era ' + numeroRandom
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }

}