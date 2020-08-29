# Tipos de condição

* Condição Simples;

## Condição Simples

A `condição simples` ocorre quando há apenas **uma condição verdadeira**.

> Usado em casos simples em que se precisa executar uma ação apenas quando a hipótese for verdadeira.

```
if (condição) {
    [true]
}
```
## Condição Composta

A `condição composta` ocorre quando há apenas **uma condição verdadeira e uma condição falsa**.

> Usado em casos quando se precisa de alguma confirmação, ou ação, quando a hipótese for falsa.

```
if (condição) {
    [true]
} else {
    [false]
}
```

## Condição Aninhada

A `condição aninhada` ocorre quando se tem **mais de uma condição verdadeira** a ser testada

> Usado em casos quando for necessário testar mais de uma hipótese verdadeira. Uma dupla checagem, por exemplo.

De forma um pouco mais clara, a condição aninhada funciona da seguinte maneira:

* Testa se a condição 1 é verdadeira
    * Se a hipótese for verdadeira, o código do bloco é executado, e a tarefa encerrada.
* Se a hipótese for falsa, o programa vai testar a condição 2.
    * Se a condição 2 for verdadeira o programa executa o código.
* Se a condição 1 e a condição 2 forem falsas, o programa executa o código dentro de "else"

A **forma indicada** de se escrever o código é a seguinte:

```
if (condição1) {
    [True]
} else if (condição2) {
    [True]
} else {
    [False]
}
```

## Condição Múltipla - switch

A `condição múltipla`é utilizada para valores fixos. Se o programa achar uma hipótese que corresponda com as instruções dadas, ele vai executar uma ação já programada.

> Essa condição é para casos específicos, quando você deseja ter o retorno assim que o sistema identifique algum nome por exemplo.



Para entender mais e ver exemplos sobre a condição switch, ver a nota [Switch - Condições múltiplas](https://github.com/juninhogomes/CursoJS/blob/master/Coment%C3%A1rios%20e%20anota%C3%A7%C3%B5es/Condi%C3%A7%C3%B5es/Switch%20-%20Condi%C3%A7%C3%B5es%20m%C3%BAltiplas.md)