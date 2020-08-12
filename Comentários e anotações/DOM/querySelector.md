# Seleção por querySelector  

> A recomendação para se selecionar elementos, no lugar do getElementsby, é utilizar o querySelector.

O querySelector funciona de forma parecida com o "getElementsby", porém ele consegue selecionar de forma mais ampla, e também é recomendado por ser uma forma mais moderna.   
Navegadores antigos podem ser incompatíveis.

`document.querySelector()`

Exemplos:

1. Para selecionar uma TAG que tem uma classe:

`const a = document.querySelector("p.classe")`

2. Para selecionar uma TAG que tem uma ID:

`cont b = document.querySelector("div#id")`