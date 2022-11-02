# Selectores en CSS3
Los selectores seleccionan elementos HTML para poder aplicar reglas que incluye los valores de las propiedades CSS

``` css
h1 {
    color: red,
    background-color: blue
}

p {
    color: red
}
```

## Selector de etiqueta
Es un selector que seleciona una etiqueta HTML

``` css
h1{
    color: red
}
```

## Selector de clase
Es un selector que selecciona la clase de uno o varios elementos HTML, este se representa con un punto y el nombre de la clase `.nombre_clase`

``` html
<p class="bg-blue">Hello world</p>
<div class="bg-blue">
    <p class="parrafo">HEllo World</p>
</div>
```

``` css
.bg-blue{
    background-color: blue;
}

.parrafo{
    color: red;
    text-align:center
}
```

::: tip
para ser mas especificos al asignar estilos a un elemento HTML por clase se le puede anteponer la etiqueta HTML
``` css
h1.parrafo{
    color: red;
    text-align:center
}
```
:::


## Selector de ID
Es un selector que selecciona el ID de un elemento HTML y este debe ser unico, este se representa con un # y el nombre del ID puesto de la etiqueta `#nombre_id`

``` html
<p id="titulo">Hello world</p>
<div>
    <p class="parrafo">HEllo World</p>
</div>
```

``` css
#titulo{
    background-color: blue;
    color: white;
}

#parrafo{
    color: red;
    text-align:center
}
```

## Selector de atributo
Es un selector que selecciona un elemento HTML y este debe tener un atributo, este se representa entre corchetes y el nombre del atributo `[nombre_atributo]`

``` html
<img src="https://imagen.png"/>
<img src="hsttps://imagen.jpg"/>
<img src="http://imagen.png"/>
```

``` css
[src="http://image.png"]{
    width: 100px;
    height: 50px
}
```

::: tip
Para poder seleccionar atributos cuyo valor solo queremos que coincidan al inicio, final o en cualquier posicion del texto, utilizamos simbolo de potencia `^` para el inicio , el simbolos de dolar `$` para el final y el asterisco `*` para cualquier posicion 

``` css
/*Selecciona los elementos que tengan el texto https al inicio del valor del atributo src*/
[src^="https"]{ 
    width: 100px;
    height: 50px
}

/*Selecciona los elementos que tengan el texto png al final del valor del atributo src*/
[src^="png"]{ 
    width: 100px;
    height: 50px
}

/*Selecciona los elementos que tengan el texto imagen dentro del valor del atributo src*/
[src^="imagen"]{ 
    width: 100px;
    height: 50px
}
```
:::

## Selectores combinadores
Estos selectores como su nombre lo dice combina selectores de varios tipos utilizando la coma `,` para separar los selectores, esto nos ayudara para poder reducir lineas de codigo y aplicar estilos a varios elementos HTML

``` html
<h1>Cabecera</h1>
<p class=titulo">Titulo</p>
```

``` css
h1,.titutlo{
    color: red;
    font-size: 25px
}
```

### Combinador de descendientes
Selecciona a los elementos que son descendientes del primer selector, utilizamos espacio para separar los selectores
``` html
<div>
    <h1>Titulo</h1>
    <h2>Subtitlo</h2>
</div>
```

``` css
div h1{
    color: red;
    font-size: 25px
}
```