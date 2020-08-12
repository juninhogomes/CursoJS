# Operadores Relacionais 
> Faz uma comparação entre valores, ou variáveis, e retornar se o resultado é "Verdeiro" (True) ou "Falso" (false).

| Sinal | Função
| -- | ------------ |
| > | Maior que (...) |
| < | Menor que (...) |
| >= | Maior ou igual |
| <= | Menor ou igual |
| == | Igual |
| != | Diferente |
| === | Igualdade no operador de identidade |


## Operadores de identidade

Naturalmente o javascript analise se os valores são **iguais**, mas não compara se os valores possuem o mesmo **tipo**. 

Na prática isso significa que o javascript vai retornar um resultado "true" no exemplo:

```
"2" == 2
(String != Number)
```
Para obter um retorno de **identidade dos tipos**, utiliza-se três iguais ` === `.

Exemplo:
```
2 === 2
(Number == number)
```

Se os tipos não forem iguais, ele vai dar como negativo:

```
"2" === 2
(String != Number)
```

### Exemplos de relacionais

| Comando | Resultado
| ---- | ----------- |
| 5 > 2 | Verdadeiro (true)| 
| 7 < 4 | Falso (False)| 
| 8 >= 8 | True| 
| 9 <= 7 | False| 
| 5 == 5 | True| 
| 4 != 4 | False| 


**Exemplo com variáveis**

```
var a = 4
var b = 15

a > b == False
a <= b-10 == True
```

### Exemplos de identidades

> Com três sinais de igualdade o JS vai testar se os dois valores são idênticos, considerando inclusive o tipo.

Exemplo:

| Comando | Resultado | Explicação |
| ------ | ----- | ---------------- |
|5 == '5' | True | String e number são iguais em método relacional |
|5 === '5'| False | Number e string são diferentes quando há identidade (três iguais) |
|5 === 5  | True | Number e Number são iguais na identidade |

##### Teste de igualdade no typeof

Exemplo:
```
var a = 'Javascript'
var b = 'Curso'

typeof a == typeof b
True
```