# Objetos en JavaScript

Podemos agrupar propiedades que tenga en comun un variable para que sea mas entendible y utilizado, tambien se conoce como `Object Literal`.

``` js
//Como normalmente se utilizaria
const nombre = 'Christian';
const edad = 22;
const profesion = 'Ingeniero de Sistemas'
```

``` js
//Utilizando Object literal
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas'
}
```

## Acceder valores de un objeto
Podemos acceder a las propiedades que agrupados de los objetos utilizando la sintaxis de punto

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas'
}

//accediendo a la propiedad nombre con la sintaxis punto
console.log(persona.nombre)

//accediendo a la propiedad nombre con la key objeto
console.log(persona['nombre'])
```

## Agregar y Eliminar propiedades de un objeto
Podemos agregar propiedades a un objeto antes o despues de la ejecucion de nuestro proyecto

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas'
}

persona.ubicacion = 'Av san roque, Santiago de Surco'

console.log(persona)
/*
{
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas',
    ubicacion: 'Av san roque, Santiago de Surco'
}
*/
```

::: warning
si agregamos un propiedad con el mismo nombre de la propiedad y asignada inicialmente este se reescribira con el ultimo valor que le dimos
:::

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas'
}

persona.edad = 23

// imprime el valor de 23 ya que se reescribio con el ultimo valor que le asignamos
console.log(persona.edad)
```

Asi como agregamos mas propiedades a nuestros objetos tambien podemos eliminar propiedades que sean existentes

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas'
}

delete persona.edad

console.log(persona) 
/*
{
    nombre: 'Christian',
    profesion: 'Ingeniero de Sistemas'
}
*/
```

## Destructuring de Objetos
Acceder a propiedades utilizando la sintaxis de punto puede ser buenos , pero cuando querramos acceder a multiples propiedades se vuelve un poco mas tedioso acceder a cada una de ella y almacenarlas a una variable.

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas'
}

//sintaxis punto
const nombre = persona.nombre;
const edad = persona.nombre;
const profesion = persona.nombre;

console.log(nombre,edad,profesion)
```

Por lo que la destructuracion es lo mas indicado para reducir lineas de codigo y sea mas entendible.

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas'
}

const {nombre,edad,profesion} = persona;

console.log(nombre,edad,profesion)
```

Tambien podemos aplicar la destructuración anidada para objetos que estan dentro de otro

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas',
    automovil: {
        marca: 'toyota',
        placa: 'FRY45',
        color: 'azul marino'
    }
}

//accediendo a la propiedad marca
const {automovil: { marca }} = persona;

console.log(marca)
```

## Problemas con los objetos
Como vemos he estado definiendo un objeto de `tipo constante` por lo que no tendria que ser modificable , pero hicimos las operaciones de agregar, modificar y eliminar ya que las propiedades de un objeto no heredan el `tipo constante`

## Congelar un objeto
Podemos congelar un objeto para que no pueda ser modificable utilizando un metodo la cual es  `Object.freeze(nombre_objeto)`

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas',
}

//ya no podremos agregar, modificar ni eliminar ninguna de las propiedades del objeto
Object.freeze(persona)

//reescribir un propiedad
persona.edad = 25 //error

//agregar un propiedad
persona.direccion = 'Av san roque, Santiago de Surco' //error

//eliminar una propiedad
delete persona.edad //error
```

::: tip
Para saber si un metodo esta congelado podemos usar el siguiente metodo
``` js
console.log(Object.isFrozen(persona)) //true o false
```
:::

## Sellar un objeto
Si bien es cierto con el metodo `Object.freeze` no podemos agregar, modificar ni eliminar propiedades de un objeto , con el metodo `Object.seal` tenemos lo mismo que el anteorior con la diferencia de solo poder modificar propiedades existentes del objeto

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas',
}

//ya no podremos agregar, modificar ni eliminar ninguna de las propiedades del objeto
Object.seal(persona)

persona.edad = 24
console.log(persona) //24
```

::: tip
Para saber si un metodo esta sellado podemos usar el siguiente metodo

``` js
console.log(Object.isSealed(persona)) //true o false
```
:::

## Copiar 2 objetos
Para poder copiar 2 objetos tenemos el metodo `Object.assign` la cual nos dara como resultado la union de los objetos pasados como parametro

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas',
}
const medida = {
    peso: '75kg',
    altura: '1.80m'
}

const resultado = Object.assign(persona,medida)

console.log(resulado)

/*
{
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas',
    peso: '75kg',
    altura: '1.80m'
}
*/
```

Tambien podemos usar la forma mas corta y usada para unir los objetos llamada `Spread Operator`, obtendremos el mismo resultado

``` js
const resultado = {...persona, ...medida}
```

## Funciones en objetos y acceder a sus valores
Podemos incluir funciones dentro de un objeto para poder hacer operaciones interna, utilizamos `this` para acceder a los valores que estan dentro del objeto

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas',
    imprimirNombre: function(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

persona.imprimirNombre();
```

## Object Constructor
La diferencia con el `Object Literal` es que ahora lo vamos a definir como una funcion, ademas que el `Object Constructor` es mas dinamico debido a que podemos pasarle parametros.

``` js
function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}

const persona1 = new Persona('Christian',22);

console.log(persona1)

/*
{
    nombre: 'Christian',
    edad: 22    
}
*/
```

## Object .keys, .values, .entries
Estos metodos nos devuelven un arreglo con lo especificado

* `Object.keys(nombre_objeto)` nos devuelve un arreglo con las llaves del objeto
* `Object.values(nombre_objeto)` nos devuelve un arreglo con los valores del objeto
* `Object.entries(nombre_objeto)` nos devuelve un arreglo con elementos pares (key y valor)

``` js
const persona = {
    nombre: 'Christian',
    edad: 22,
    profesion: 'Ingeniero de Sistemas',
}

const keys = Object.keys(persona) //['nombre','edad','profesion']
const values = Object.values(persona) //['christian',22,'Ingeniero de Sistemas']
const entries = Object.entries(persona)
/*[
    ['nombre','Christian'],
    ['edad',22],
    ['profesion','Ingeniero de Sistemas']
]*/
```