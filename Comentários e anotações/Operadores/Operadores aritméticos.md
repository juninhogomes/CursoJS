## Operadores aritméticos

| Sinal | Função                   | Exemplo       |
| ----- | ------------------------ | ------------- |
| +     | Soma                     | 5 + 2 = 7     |
| -     | Subtração                | 5 - 2 = 3     |
| *    | Multiplicação            | 5 * 2 = 10   |
| /     | Divisão                  | 5 / 2 = 2,5   |
| %     | Resto da divisão inteira | 5 % 2 = 1     |
| **  | Potência                 | 5 ** 2 = 25 |

_Explicação sobre o resto da divisão de números inteiros_

Para completar a divisão inteira, se colocaria uma virgula e continuaria multiplicando até zerar o número.
O número mostrado pelo operador "%" é o resultado do número do problema subtraindo todos os valores encontrados sem utilizar a virgula.

```
5 / 2 |||| (2*2 = 4)
5-4 = 1
```

## Precedência

1. Operações dentro de Parenteses '()'
2. Potência (**),
3. Multiplicação (*), divisão (/) ou Resto da divisão inteira (%),
4. soma (+) ou subtração (-).

### Casos de precedência

Os operadores que estiverem dentro de parênteses são prioridades.

```

Por exemplo:
(5+3) / 2 = 4
5 + 3 / 2 = 6.5
```

Operações dentro de colchetes '[]' são executadas e apenas colocada junto do resultado, ou seja, nenhuma outra operação é realizada com o resultado dos colchetes.

```
    Exemplo:
    [5+3] + 3/2 = 81,5 (O '8' veio da soma 5+3, e o '1,5' da divisão 3/2)
    (5+3) + 2 = 10 (Os Parenteses dão prioridade a soma)
    5 + 3 / 2 = 6,5 (A divisão vem primeiro do que a soma)
```
______________________

**Exemplo prático de precedência:**

`- var A = 5 + 3`  
- Variável 'a' vai guardar o resultado '8'
---
`- var B = a % 5` 
- O restante da divisão inteira de 8 (A) por 5 é '3'
---
`- var C = 5 * b ** 2`
- Potência de 3 (B) ao quadrado multiplicado por 5 é '45'
---
`- var D = 10 - a/2` 
- A divisão de 8 (A) por 2, subtraída de 10 é igual a '6'
---
`- var E = 6 * 2 / d` 
- A multiplicação de 6 x 2, dividida por 6 (D) é igual '2'
---
`- var F = b % e + 4 / e` 
- 3 (B) % 2 (E) soma com o resultado de 4 / 2 (E). 
---
**Resultado '3'**
