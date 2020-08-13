# Funções

> É um conjunto de códigos que vão ser executadas apenas quando ocorrer um evento DOM.

As funções são um conjunto de códigos que só vai acontecer após um determinado evento DOM for disparado pelo documento.

## Programação de uma função

A função acontece dentro de um `bloco` de função, que fica dentro de chaves.

```
function() {
    bloco
}
```


A função pode ser anonima, mas geralmente `se coloca o nome da ação` que vai acontecer. Isso permite que a ação seja configurada para ocorrer nos elementos certos com os eventos exatos.
```
function ação() {
    bloco
}
```

Dentro dos parenteses de uma ação são colocados os `parâmetros`, que podem ser um ou mais.

```
function ação(parâmetros) {
    bloco
}
```

## Function por evento no HTML

Nesse exemplo, o HTML tem uma `<div>`com ID e uma function nomeada como `clicar()`. No Javascript a function está programada para alterar o texto após o evento DOM acontecer.

**Importante**, o evento DOM está programada no HTML, é o evento `onclick`e não no javascript.

```
<body>
    <div id="area" onclick="clicar()">
        Interaja
    </div>

    <script>
        function clicar() {
            var a = document.getElementById('area')
            a.innerText = 'Clicou'
        }

    </script>
</body>
```

## Function acontecendo no Javascript

Para programar as actions diretamente no Javascript, os eventos DOM precisam ser colocados em `addEventListener`.

```
<body> | HTML
    <div id="area">
        Interaja
    </div>
</body>

    <script> | Javascript
        
        var a = document.getElementById("area")

        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)

        (... functions seguem igual no exemplo HTML ...)
```

No add addEventListener():

- Entre aspas vai o evento q o javascript precisa rastrear.
- Sem aspas o nome da function programada no JS.
    - Observação: A function não é colocada com os parâmetros.