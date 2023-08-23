

function Calcular(){
    let pesoInput = document.querySelector('#pesoInput').value
    let resultado = document.querySelector('#resultado')
    let categoria = ''

    if(pesoInput < 50){
        categoria = 'De nenhuma categoria. Aumente o seu peso!'
    }else if(pesoInput <= 57){
        categoria = 'Peso Mosca!'
    }else if(pesoInput <= 61){
        categoria = 'Peso Galo!'
    }else if(pesoInput <= 66){
        categoria = 'Peso Pena!';
    }else if(pesoInput <= 70){
        categoria = 'Peso Leve!'
    }else if(pesoInput <= 84){
        categoria = 'Peso Médio!'
    }else if(pesoInput > 84){
        categoria = 'Peso Pesado!'
    }

    console.log(categoria)
    resultado.innerHTML = `Seu peso é ${pesoInput}kg, você é da categoria: ${categoria}`

}