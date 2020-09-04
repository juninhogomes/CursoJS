# Estrutura de repetição com variável de controle

Nesse tipo de repetição, o programa vai realizar 3 etapas:

* Inicialização
* Teste Lógico
    * O programa vai inicializar a função, e fazer o teste lógico
    * Se a hipótese do teste for verdadeira, ele executa a ação e retorna para o teste lógico
* Incremento
    * Após executar a ação, o programa irá testar novamente se a hipótese é verdadeira
    * Nesse processo de looping, testar > *executar > testar*, é feito o incremento
* O looping continua acontecendo até o teste lógico se tornar falso.

```
for (inicio ; teste ; incr) {
    [bloco true]
} [Continua o processo quando a hipótese for false]
```

Dentro do bloco pode se colocar if, else, while, do-while...

