# Repaso de JS moderno

## Promesas
Las promesas tienen una naturaleza asincrona porque lo que seran ubicadas en las pilas de tareas de js para su ejecucion.

``` js
const promesa = new Promise((resolve,reject)=>{
    //CODIGO ASINCRONO   
})
```

### Resolve en Promesas
Resolve es una funcion que se va a ejecutar cuando la promesa se cumpla exitosamente.

``` js
const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hola Mundo');
    },3000);
})

promesa.then(()=>{
    console.log('Promesa cumplida');
})
```