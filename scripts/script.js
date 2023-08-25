

function Calcular() {
    let pesoInput = document.querySelector('#pesoInput').value
    let resultado = document.querySelector('#resultado')
    let categoria = ''
    if (pesoInput == '' || pesoInput == 0) {
        alert("Insira um número válido")
    } else if (pesoInput < 50) {
        resultado.innerHTML = `Você não é de nenhuma categoria`
    } else if (pesoInput <= 57) {
        categoria = 'Peso Mosca!'
        resultado.innerHTML = `Seu peso é ${pesoInput}kg, você é da categoria: ${categoria}`
    } else if (pesoInput <= 61) {
        categoria = 'Peso Galo!'
        resultado.innerHTML = `Seu peso é ${pesoInput}kg, você é da categoria: ${categoria}`
    } else if (pesoInput <= 66) {
        categoria = 'Peso Pena!'
        resultado.innerHTML = `Seu peso é ${pesoInput}kg, você é da categoria: ${categoria}`
    } else if (pesoInput <= 70) {
        categoria = 'Peso Leve!'
        resultado.innerHTML = `Seu peso é ${pesoInput}kg, você é da categoria: ${categoria}`
    } else if (pesoInput <= 84) {
        categoria = 'Peso Médio!'
        resultado.innerHTML = `Seu peso é ${pesoInput}kg, você é da categoria: ${categoria}`
    } else if (pesoInput > 84) {
        categoria = 'Peso Pesado!'
        resultado.innerHTML = `Seu peso é ${pesoInput}kg, você é da categoria: ${categoria}`
    }

    console.log(categoria)


}


function delDiv() {
    let container = document.querySelector('#container')
    let resultado = document.querySelector('#resultado')
    let pesoInput = document.querySelector('#pesoInput')
    container.style.display = 'none'
    title.style.display = 'flex'

    pesoInput.value = `0`
    resultado.innerHTML = ``

}

function startDiv() {
    let title = document.querySelector('#title')
    let container = document.querySelector('#container')
    title.style.display = 'none'
    container.style.display = 'flex'
}