# Converter strings e Numbers
! **Atenção** - A conversão de String para Number é utilizada quando um valor numérico está dentro de uma string. Por exemplo, um "2" converter para 2 !

Para strings
> O javascript retorna o valor como uma string. Para cálculos números, é preciso converter a string em number.

Para numbers
>Quando se precisa trabalhar com números, é possível alterar o tipo de número, se é inteiro ou real.
________________________________________________

## Conversão de NUMBER

| Conversão | Resultado |
| ---------- | ------------------ |
| parseInt(n) | Retorna valores em números inteiros |
| parseFloat(n) | Retorna valores com números reais |
| number(n) | Converte uma string para valor numérico nas versões mais novas do javascript |

Exemplo:
```
parseInt(10.5)
| Retorna o número inteiro "10"
```

Para o número aparecer como float:
```
parseFloat(10.5)
| Retorna o número real "10.5"
```
________________________________________________

## Conversão de STRING para NUMBER

> Uma forma de converter uma string para Number, é colocar a string dentro do parâmetro do parseInt(),parseFloat() ou Number()

Exemplo:

```
var n1 = "5" | typeof == String
var n2 = parseInt(n1)

n2 = 5 | typeof == Number
```

Nas versões mais novas do Javascript pode se utilizar a conversão através do `Number()`:

```
n3 = "8" | typeof == String
n4 = Number(n3)

n4 = 8 | typeof == Number
```
________________________________________________

## Converter NUMBER para STRING

Para converter de NUMBER para STRING, há dois comandos:

- [a] String(n)
- [b] _variável_.toString()


Exemplo 1:
```
String(10)
| Retorna a string "10"
```

Exemplo 2:
```
n5 = 11
n5.toString()

| Retorna a string "11"
```
