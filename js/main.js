function calcular(tipo, valor){
    if(tipo === 'acao'){

        if(valor === 'c'){
            //limpar o visor (id resultado)
            document.getElementById('result').value = ''
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            //concatenando a ação com o valor recebido no campo
            document.getElementById('result').value += valor
        }

        if(valor === '='){
            //utilizando a função 'eval', que pega a string do campo value e interpreta como expressão aritmetica, atribuindo o resultado a variável
            var valor_campo = eval(document.getElementById('result').value)
            document.getElementById('result').value = valor_campo
        }

    }else if(tipo === 'valor'){
        //recuperando o valor de entrada, realizando a atribuição ao campo e também a concatenação utilizando +=
        document.getElementById('result').value += valor
    }
}

const nightMode = document.querySelector('#night_mode')

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night_mode')
})
