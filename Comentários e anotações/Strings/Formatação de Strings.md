# Concatenar 
Concatenar variável, significa adicionar a variável a um comando de texto.

Exemplo

Na janela do NODE (Para abrir o node no VCS é só abrir o terminal e digitar NODE):

```
- var a = "final"; (*Adiciona a String "final" na variável 'a')
- "Esse é o meu texto " + a; (Vai mostrar a seguinte String)
> "Esse é o meu texto final".

```

--------------------------------

Outro exemplo:

```
var a = "final"
"Este é o meu texto" + a + "hoje"
"Este é o meu texto final hoje"
```

______________________

## Template String

Uma alternativa, disponível nas versões mais recentes do JS, é o `"Template String"`.

Com o 'Template String' é possível colocar as variáveis dentro da String sem precisar Concatenar.

Por exemplo:

```
> var nome = "Junior"
> var idade = 31
> `Meu nome é ${nome}, e tenho ${idade} anos`
> `Meu nome é Junior, e tenho 31 anos`
```

> Importante! Template Strings funcionam apenas dentro do da CRASE (`), e os inputs devem ser feito dentro de chaves {}

O comando `${}`é chamado também de **Placeholder**

______________________

### Outros comandos para Strings:

- variável.Length // Vai dizer quantos caracteres a String tem
- variável.toUpperCase() // Vai colocar todas as letras em maiúsculo
- variável.toLowerCase() // Vai colocar todas as letras em minúsculo