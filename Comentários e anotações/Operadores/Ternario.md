# Operadores ternários

> Dão seguimento a um teste quando de Verdadeiro ou Falso.

| Sinal | Retorno esperado |
| -- | ------------------ |
| ? | Para retornar quando verdadeiro |
| : | Para retornar quando falso |

```
"Teste-a-ser-executado" ? 'O resultado se o teste for verdadeiro' : 'O resultado se o teste for falso'
```
Exemplo:

```
var nota = 5
nota >= 7 ? 'Aprovado' : 'Reprovado'

Reprovado
```

Exemplo 2:
```
var idade = 19
var r = idade > 18 ? 'Maior' : 'Menor'

Maior
```