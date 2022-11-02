# Funciones en JavaScript
Las funciones en Javascript nos ayudar a agrupar un conjunto de instrucciones repetitivas, por lo que esta es reutilizable.Existen dos formas de crear funciones las cuales son las siguientes:

* Declaracion de funcion


``` js
// Declaracion de funcion

function sumar(/*parametros de la funcion*/){
    //Cuerpo de la funcion
    console.log(2+2);
}
sumar(); // llamada a la funcion
```

* Expresion de funcion

``` js
// Expresion de funcion
const sumar = function(/*parametros de la funcion*/){
    console.log(2+2)
}
sumar(); // llamada a la funcion
```

::: tip
La diferencia de las dos formas es que la expresion de funcion es como una variable y la declaracion de funcion es una funcion como tal ademas que la primera solo puede ser llamada despues de ser declarada y la segunda puede ser llamada en cualquier parte del codigo.
:::

## Diferencia entre Funcion y Metodo
esto va a depender del contexto en la cual se esten utilizando

``` js
// esto es una funcion
console.log(imprimirNombre('Christian')) // primero va el nombre de la funcion y seguidamente entre parentesis el/los parametros
```

``` js
// esto es una metodo
console.log(nombre.toString()) // primero va el nombre de la variable seguidamente de un punto y la accion
```

## Parametros y Argumentos en funciones

``` js
function sumar(a,b){ // a y b son los parametros de  la funcion
    return a + b;
}

sumar(3+7) // 3 y 7 son los argumentos de la funcion
```

## Parametros por default
Hay algunos casos en las que solo pasamos por ejemplo 2 argumentos de los 3 definidos en la funcion , por lo que el ultimo queremos que tenga un valor por defecto en el caso no se le pase nada para que asi nuestro programa no tenga errores.

``` js
function saludar(nombre, apellido = ""){
    return `Hola ${nombre} ${apellido}`
}

saludar()
```

## Añadir funciones a un objeto

``` js
const reproductor = {
    reproducir: function(id){// estos son los metodos de propiedad
        console.log(`Reproduciendo la cancion ${id}..`)
    },
    pausar: function(){
        console.log('Pausando cancion ..')
    }
}
reproductor.reproducir(30)
```

## Arrow Functions
Fue agregada en la gran revolucion de javascript ES6

``` js
const aprendiendo = ()=>{
    console.log('Aprendiendo Javascript);
}

// forma mas corta solo se aplica cuando se tiene 1 sola linea de codigo
const aprendiendo = ()=> console.log('aprendiendo js')

aprendiendo();
```

## transformando nuestro reproductor a un arrow function

``` js
const reproductor = {
    reproducir: (id)=>{// estos son los metodos de propiedad
        console.log(`Reproduciendo la cancion ${id}..`)
    },
    pausar: ()=>{
        console.log('Pausando cancion ..')
    }
}
reproductor.reproducir(30)
```
