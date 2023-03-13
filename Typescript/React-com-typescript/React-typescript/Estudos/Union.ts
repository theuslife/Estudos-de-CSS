
// O simbolo "|" é usado para indicar que o tipo de uma variável ou retorno de função
// é de dois ou mais tipos. Chamados isto de Union
function showMessage(id: number | string): void {
    console.log(`Oi, este é meu ${id}`)
}

function showMessage2(id: number): void {
    console.log(`Oi, este é meu ${id}`)
}

function showMessage3(id: number | string | boolean): void {
    console.log(`Oi, este é meu ${id}`)
}

showMessage(15) // Certo
showMessage('Olá Hermanos') // Certi
showMessage2('Olá Hermanos') // Errado
showMessage2(20) // Certo
showMessage(false) // errado
showMessage3(true) // Certo