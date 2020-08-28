# Switch

A `condição múltipla`é utilizada para valores fixos. Se o programa achar uma hipótese que corresponda com as instruções dadas, ele vai executar uma ação já programada.

O programa vai **testar a hipótese** definida na expressão, e ao encontrar algum caso que se encaixe nessa expressão ele vai executar uma ação. 

O comando `break`é essencial para que o programa possa continuar suas operações ao terminar esse processo.

Como funciona de uma forma um pouco mais clara:

* O programa vai ler a expressão definida na linha `switch` e buscar um `case` que se encaixe nessa expressão.
    * A expressão vai ser testado na sequência de casos. Se o caso for falso, ele vai pular para o próximo.
* Ao encontrar um case que seja verdadeiro, ou seja, igual a expressão, ele vai executar a ação programada.
* Após executar a ação, o programa vai ler o `break` e encerrar as buscas.
    * Caso não tenha um break no caso lido, o programa vai continuar comparando a expressão com outros casos até achar um break.
* O comando `default` é parecido com o else, ou seja, vai ser executado apenas se nenhum caso for igual a expressão buscada.

```
switch (expressão) {
    case "valor 1":
        [Ação ao identificar o valor 1];
    break;
    case "valor 2":
        [Ação ao identificar o valor 2];
    break;

    default: 
        [Ação padrão caso ele não encontre nenhum caso que se encaixe na expressão];
    break;
}
```