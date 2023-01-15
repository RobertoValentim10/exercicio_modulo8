const form = document.getElementById ('form-agenda')

let dados = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizarTabela()

})

function adicionarLinha(){
    const inputNomeContato = document.getElementById('nomes-contatos')
    const inputNumeroContato = document.getElementById('numeros-contatos')
    const inputDataContato = document.getElementById('data')

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumeroContato.value}</td>`
    linha += `<td>${inputDataContato.value}</td>`
    linha += '<tr>'

    dados += linha
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = dados; /* Para inserir um conteudo dentro de uma tag */
}