# DOM = Document Object Model

> É um conjunto de objetos no navegador que dá acesso aos elementos do site
______

## Árvores de DOM

> É uma árvore hierárquica de todos os elementos de um site.

A raiz da árvore é o 'window', e todos os outros elementos vem depois dela.  
_O 'window' é a janela do navegador._  
  
Elemento é tudo que aparece dentro de uma árvore DOM.
______

### Parent e Child

No código de um documento, todo elemento que está logo acima de outro é considerado como o `"parent"` e o elemento logo abaixo é considerado como `"child"`

Exemplo:

```
HTML {
 Body {
   <div>
}}
```

- HTML é PARENT de Body
- Body é CHILD de HTML
- Body é, também, PARENT de div
- div é CHILD de Body

_________

## Exemplo de uma árvore DOM

```
window -> location; document; history
    document -> html -> head; body;
        head -> meta; title; (e todos os elementos que estiverem dentro do head do site)
            body -> h1; <p>; <div>;
                p -> strong
```

- window (A janela do navegador)
- location (URL do site, página atual, páginas acessadas)      
- document (O documento atual em exibição)
- history (O histórico de navegação, por exemplo )
