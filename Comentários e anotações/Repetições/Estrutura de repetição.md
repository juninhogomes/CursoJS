# Estrutura de repetição com teste lógico no início

> Primeiro testa, depois executa o bloco.
**Estrutura while**

A estrutura de repetição com teste lógico no início também é chamada de Laços.


Os laços funcionam parecido com as condições. O programa irá testar se uma hipótese é verdadeira ou falsa. Quando a hipótese for **verdadeira** o programa vai executar a ação programada. Ao contrário das condições, porém, ao executar essa ação o programa não continua para outras tarefas. 

Ao encontrar uma hipótese verdadeira e executar a ação, o programa vai testar novamente a hipótese para saber se ela continua verdadeira. Se continuar ele vai repetir a ação, e vai continuar repetindo esse processo isso enquanto a hipótese for verdade. Quando a hipótese se tornar falsa, o programa irá continuar normalmente para outras tarefas, ou funções.

```
function repeticao() {
while (condicao) {
    [Bloco True]
    }
} [Continuação quando o while(condicao) for False]
```

### Um exemplo prático de repetição com esse teste.

* Uma variável 'a' que irá receber o número 1.
* Enquanto 'a' for menor ou igual a 10, o programa vai somar um número a ela.
* A cada passo, o programa vai mostrar o valor do 'a' naquela etapa.

```
var a = 1
while(a <= 10){
    console.log(`Passo ${a}`)
    a++
}

> Passo 1
> Passo 2
> Passo 3
(...)
> Passo 10
```

Nesse exemplo:
* O programa testou o valor da variável 'a', que iniciou com '1'.
* A cada etapa ele somou mais 1 (a++) nela.
* Ao somar o programa registrou o novo valor da variável
* Se o valor de 'a' era menor ou igual a 10, ele repetia o processo
* Quando o valor de 'a' se tornou maior que 10, o programa encerrou a função.

# Teste de repetição onde primeiro é feito a ação e depois o teste

> Primeiro executa o bloco, depois testa.
**Estrutura do-while**

A lógica desse teste é igual ao modelo de laço com teste lógico no inicio, só que, dessa vez, primeiro o programa executa a função e só apenas depois disso ele vai testar a hipótese.

```
do {
    [bloco de ação]
} while (condicao)
```

Nesse caso o programa vai executar uma ação `(do)`e após isso ele vai testar a condição no `while`. Se a condição for verdadeira, ele vai repetir o `do`, se a condição for falsa, ele encerra o processo.
