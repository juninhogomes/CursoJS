# Eventos DOM  

> São as ações que acontecem com um elemento

Uma lista de eventos DOM pode ser vista no site do [Mozila](https://developer.mozilla.org/pt-BR/docs/Web/Events)

## Evento DOM no HTML

Nesse exemplo uma tag `<div>` foi criada e dentro da tag programado um evento `onclick`. O Evento onclick acontece toda vez que o usuário clicar no elemento que está dentro da div.

A personalização desse evento muda a cor de fundo quando o clique do usuário ocorrer.

```
    <div onclick="style.background = 'red'">
        Evento DOM
    </div>
```

## Evento DOM no Javascript

Para evitar poluir o HTML, os eventos DOM podem ser colocados diretamente no Javascript através do comando `addEventListener`.

Exemplo: 

```
var a = document.getElementByid("id-elemento")

a.addEventListener('click', clicar)
```

O `addEventListener` pode ser dividido da seguinte forma:  

- addEventListener() | O comando que vai identificar o evento dentro do elemento
- 'click' | Entre aspas o evento que ele precisa reconhecer, nesse exemplo, o evento é o `onclick`
- clicar | A function que está programada no javascript. Ela é sem parenteses e sem aspas.

## Eventos e functions

Os eventos são utéis para programar functions, ou seja, uma ação vai acontecer após o evento DOM ser disparado. 

Alguns dos eventos DOM são ações com o mouse, então, é possível, por exemplo, configurar para algum elemento fazer uma ação `(function)` após o usuário clicar com o mouse nele.