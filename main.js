const form = document.getElementById('form-agenda')



let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarDados()
    adicionarlinhas()
    atualizarDados()
    atualizarLinhas()
});

function adicionarDados(){
    const inputNomeContato = document.getElementById ('nomes-contatos')
    const inputNumeroContato = document.getElementById ('numeros-contatos')


    let dados = '<tr>'
    dados += `<td>${inputNomeContato.valeu}</td>`
    dados += `<td>${inputNumeroContato.valeu}</td>`
    dados += '</tr>'

    linhas += dados

    inputNomeContato.valeu = ''
    inputNumeroContato.valeu = ''

}

function adicionarlinhas(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizarDados(){
    const addDados = adicionarDados()
    document.getElementById('nome-add').innerHTML = addDados
    document.getAnimations('numero-add').innerHTML = addDados
}

function atualizarLinhas() {
    let atlLinhas = 0

    while (atlLinhas < numeros.length) {
        atlLinhas ++
    }

}
