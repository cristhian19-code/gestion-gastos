# Array o Arreglos en JavaScript
Los arreglos nos ayudan a agrupa elementos de un mismo tipo, un ejemplo de este es un carrito de compra y se representa entre corchetes y los elementos separados por comas `[1,2,3,4,5]`.

::: tip
 tambien podemos crear un arreglo por medio de un objeto 
``` js
const frutas = new Array('pera', 'manzana', 'naranja', 'limon');
```
:::

## Acceder a los valores de un array
Podemos ver los valores de un array graficamente en una tabla utilizando `console.table(arreglo)`

``` js
const numeros = [1,2,3,4,5,6];
console.table(numeros)
```

Para ver a un solo elemento solo tenemos que indicar el indice del elemento que queremos ver entre corchetes `numeros[0]`

``` js
const numeros = [1,2,3,4,5,6];

console.log(numeros[1]) //2
console.log(numeros[2]) //3
console.log(numeros[4]) //5
```

## Recorrer un array
Para recorrer un array podemos utilizar un ciclo `for` o `forEach`

``` js
const numeros = [1,2,3,4,5,6];

for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]) // 1,2,3,4,5,6
}
```


``` js
const numeros = [1,2,3,4,5,6];

numeros.forEach((e)=>{
    console.log(e) // 1,2,3,4,5,6
})
```