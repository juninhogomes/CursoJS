# Estruturas de controles

> É a forma que o programa conclui as suas tarefas, ou seja, como sair do ponto inicial e chegar no ponto final de uma tarefa. 

## Sequências

Na estrutura em sequências o programa tem etapas sequenciais, definidas uma após a outra, até chegar na conclusão da função.

```
function sequencial() {
    fazerA()
    fazerB()
    fazerC()
    concluir()
}
```
## Condições

Acontece quando se tem um teste lógico com duas hipóteses, podendo ser verdadeiro ou falso.

Se a hipótese for verdadeira, o programa irá executar uma ação. Se a hipótese for falsa, o programa irá executar outra ação.
Para saber mais, ver a nota sobre [Condições](https://github.com/juninhogomes/CursoJS/blob/master/Coment%C3%A1rios%20e%20anota%C3%A7%C3%B5es/Condi%C3%A7%C3%B5es/Condi%C3%A7%C3%B5es.md)
```
function condicao() {
    if A {
        [Bloco True]
    } else {
        [Bloco False]
    }
}
```
## Repetições

> Laços

Os laços funcionam parecido com as condições. O programa irá testar se uma hipótese é verdadeira ou falsa. Quando a hipótese for **verdadeira** o programa vai executar a ação programada. Ao contrário das condições, porém, ao executar essa ação o programa não continua para outras tarefas. 

Ao encontrar uma hipótese verdadeira e executar a ação, o programa vai testar novamente a hipótese para saber se ela continua verdadeira. Se continuar ele vai repetir a ação, e vai continuar repetindo esse processo isso enquanto a hipótese for verdade. Quando a hipótese se tornar falsa, o programa irá continuar normalmente para outras tarefas, ou funções.

```
function repeticao() {
while (condicao) {
    [Bloco True]
    }
} [Continuação quando o while(condicao) for False]

```

### Exemplo de repetição

**Comer uma pizza**

* A minha função vai ser a atividade de comer uma pizza
* O processo para completar a função é comer fatias dessa pizza.
    * Como a pizza tem 8 pedaços, fatias, o processo é repetido 8 vezes.
* Quando acabam as fatias, ou os processos, a função é encerrada.

Processo *sequêncial*
```
function comerPizza() {
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
}
```

Processo por *repetição*

```
function comerPizza() {
    while (temFatia()){
        comerFatia()
    }
}
```