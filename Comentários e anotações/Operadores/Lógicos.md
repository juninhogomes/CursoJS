# Operadores lógicos

| Sinal | Função | Condição |
| -- | ------------ | -- |
| ! | Utilizado para definir uma negação na operação | não |
| && | Utilizado para criar uma conjunção | e |
| \|\| | Utilizado para criar uma disjunção | ou |

**Precedência:** 
1. Não ( ! ), 
2. e ( && ), 
3. ou ( || )

-----

## Operador de negação = !

> Define que a resposta recebida deve ser **negativa** ou **oposta** a requisição inicial.

Exemplo:

- !true 
    - Algo que NÃO é verdadeiro, ou seja, o resultado dessa operação é "false"
- !false 
    - Algo que NÃO é falso, ou seja, o resultado dessa operação é "true"

## Operador de conjunção = &&
> O resultado esperado precisa ser duas vezes verdadeiro, ou seja, preciso de A **e** preciso de B

| Operação | Resultado | Explicação/Exemplo
| ----------- | ------------- | ---------------------- | 
| true && true | Verdadeiro | Quando se recebe as duas coisas pedidas |
| true && false | Falso | Quando se recebe apenas a primeira coisa pedida |
| false && true | Falso | Quando se recebe apenas a segunda coisa pedida |
| false && false | Falso | Quando não se recebe nenhuma das duas coisas pedidas |

## Operador de disjunção = ||
> O resultado esperado precisa ser uma vez verdadeiro, ou seja, preciso de A **ou** preciso de B

| Operação | Resultado | Explicação/Exemplo
| ----------- | ------------- | ---------------------- | 
| true \|\| true | Verdadeiro | As duas respostas são verdadeiras |
| true \|\| false | Verdadeiro | Basta que apenas a primeira resposta seja verdadeira|
| false \|\| true | Verdadeiro | Basta apenas que a segunda resposta seja verdadeira |
| false \|\| false | Falso | Nenhuma das respostas é verdadeira |