# Para personalizar retorno numérico

> Comandos utilizados para trocar a virgula por ponto, definir a quantidade de casas decimais e converter para unidades financeiras.

| Comando| O que faz |
| ------------------ | ---------------------- |
| _variável_.toFixed(n) | O `n`define a quantidade de casas decimais |
| _variável_.replace(".", ",") | Vai substituir o ponto, por virgula |
| _variável_.toLocaleString('EN', (style: 'currency', currency: 'USD )) | Converte o número para padrões de dolar |  

A conversão do toLocaleString pode ser para **Reais (BRL)**, **Dólares (USD)** ou **Euro (EUR)**.  

_O comando só altera os símbolos e pontuação, não faz a conversão dos valores!!_

