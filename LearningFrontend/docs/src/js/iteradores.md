# Iteradores

## break y continue
con break podemos romper la ejecucion de un for loop

``` js
for(let i=0; i<5; i++){
    if(i === 5){
        console.log('Numero 5 encontrado')
        break; // aqui se detiene la ejecucion del for y sale del mismo
    }
    console.log(`numero ${i}`)
}
```

con continue llegamos hasta esa linea y omite lo que sigue pero no sale del for loop

``` js
for(let i=0; i<5; i++){
    if(i === 5){
        console.log('Numero 5 encontrado')
        continue; // aqui se detiene y omite lo que sigue, seguidamente vuelve al inicio del ciclo
    }
    console.log(`numero ${i}`)
}
```