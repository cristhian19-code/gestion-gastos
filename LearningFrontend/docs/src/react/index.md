# Reactjs

``` jsx
const divRoot = document.querySelector('#root'); // referencia añl elemento HTML

const h1Tag =<h1>Hola Mundo</h1> //

ReactDOM.render(h1Tag,divRoot); //llamada a la funcion de react, para mostrar "algo" en nuestro HTML

```

## Composicion de JSX
JSX viene de la union de JS y XML

``` jsx
const h1Tag = <h1>Hola Mundo</h1>

// equivalente a

const h1Tag = document.createElement('h1',null,`Hola, soy ${nombre}`);
```

