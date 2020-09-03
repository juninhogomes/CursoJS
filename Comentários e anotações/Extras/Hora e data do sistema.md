# Para pegar informações do sistema sobre hora e data

> Para tarefas que precisem da hora e/ou data do cliente.

O comando `new Date()` é a chamada para a tarefa necessária.
Para isso, é preciso colocar essa ação dentro de uma variável.

```
var momento = new Date()
```

Após isso, utiliza-se a variável seguida da ação que se precisa, dentro de outra variável. 

```
var hora = momento.getHours()
```


A lista dos gets pode ser [vista aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)
