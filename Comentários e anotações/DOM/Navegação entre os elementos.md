# Seleção de Elementos

5 métodos de selecionar um elemento

1. Marca (tag) 
2. Por ID
3. Por Nome
4. Por Classe
5. Por Seletor

Pode se utilizar o `getElementsBy()` ou uma forma mais moderna que é o seletor do `querySelector`
_______

## Utilizando a seleção  
> A seleção de um elemento pode ser útil para alterar as características de um elemento.  

_Os exemplos aqui são todos utilizando a seleção por marca_  

Exemplo para **alterar a cor** de um texto com o comando `style`.
```
<p>Texto aqui<p>

const x = getElementsByTagName("p")
x.style.color = "red";
```  
  
Exemplo para **Mudar um texto** com o comando `innerText`  
```
<p>Um texto aqui<p>

const y = getElementsByTagName("p")
y.innerText = "Outro texto"
```

O comando `innerText` serve também para duplicar o texto de um elemento, e o `innerHTML`pode duplicar um texto que contenha tags HTML dentro dele.
_______

### Seleção por marca (tag)

Dessa maneira você pode selecionar mais de um elemento, desde que tenham o mesmo nome. 

Por exemplo, selecionar todos os `<P>, <div>` ou qualquer elemento que tenha o mesmo nome.

Exemplo:  
`const marca = document.getElementsByTagName("p")[0]; `

> Se o comando for um getElementsBy() com um "s" no final do Element, e tiver mais de um elemento no documento com a mesma tag, significa que depois do parâmetro é utilizado uma array, colchetes `[]`, para definir qual o elemento que vai ser selecionado. Começa a contar a partir do 0


________

### Seleção por nome

Com a seleção por nome, vai se selecionar o elemento que tenha determinado nome no documento. Para isso, basta utilizar o comando:

```
document.getElementsbyName()
```

________

### Selecionar por ID e classe

Da mesma forma que os outros, é possível utilizar a seleção por classe ou Id. Importante lembrar que no CSS a classe é identificada por ponto `"."`e id por hashtag `"#"`

```
document.getElementById()
document.getElementsByClassName()
```
________




