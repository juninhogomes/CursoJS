# O que são variáveis:

> Variável é onde o programa guarda os dados. Uma especie de apelido, ou atalho, para algo que vai ser utilizado posteriormente.
<br>

Exemplo:
`var nome = window.prompt("Qual é o seu nome?")` 

Esse comando diz que a `variável (VAR) "nome"` está `recebendo (=)` o código window.prompt. 

______________________________________________

## Concatenação de string

Para juntar mais de uma variável no mesmo comando, ou adicionar uma variável a um texto da função, pode utilizar o `+` para concatenar.

Exemplo 1:

```
write(var1 + var2)

> var1 var2
```

Exemplo 2:

```
write('Este é o texto ' + var1)

> Este é o texto var1
```

Exemplo 3:

```
window.alert("É um grande prazer em te conhecer " + nome + "!")

```

#### Concatenando com CRASE

Caso queira utilizar a variável sem usar essa concatenção, é possível fazer utilizando a crase no inicio e no fim do parâmetro (que ficam dentro dos parenteses) e o comando `${}`. Útil para funções ou linhas mais longas.

Exemplo:

```
write(`Esse é um texto concatenado com uma ${variavel}`)
```
______________________________________________

### Comandos "window", document, "alert" e "write"

1. O comando `"window"` diz para o navegador executar o comando na janela, uma espécie de Popup.
2. O comando `document` faz a modificação dentro do documento.
3. O `alert`cria uma janela de alerta, um aviso
4. O `write`escreve algo dentro do próprio documento

Por exemplo: 

```
    window.alert("É um grande prazer em te conhecer ")

```
______________________________________________

#### Outros comandos:

- window.prompt() // Aparece uma janela para digitar algo
- windows.alert() // Aparece um alerta com uma mensagem e botão de ok.
- window.confirm() // Aparece um alerta com texto e duas opções (ok e cancelar)