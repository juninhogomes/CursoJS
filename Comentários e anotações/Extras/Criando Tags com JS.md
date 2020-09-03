# Criar tags HTML diretamente pelo JS.

O comando `document.createElement('tipo')`vai criar um elemento do tipo definido dentro do documento HTML. Por exemplo:

```
var imagem = document.createElement('img')
```

Nessa linha de comando, sempre que o JavaScript se deparar com uma função que chame a variável 'imagem' ele vai criar uma TAG `<img>` dentro do documento HTML.

## Inserindo atributos na TAG

Para inserir atributos dentro de uma TAG HTML diretamente pelo Javascript, é utilizado o comando `[variável].setAttribute('[atr1]', '[atr2]')`.

Por exemplo, para adicionar um Id no elemento img criado anteriormente.

```
imagem.setAttribute('id','imagem')
```

Esse comando vai adicionar um `id="imagem"` na TAG HTML criada devido a variável imagem.