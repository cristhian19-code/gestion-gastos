# Introduccion a Blockchain y Ethereum

## ¿Que es la Blockchain?
Es un libro mayo que permite las transcacciones o `Ledge` almacenado en bloques,no solo estamos hablando de transacciones financiera sino de cualquiera que tenga valor

En el `Ledge` solo podemos agregar nueva informacion ya que una vez que se almacena ya no puede ni editarse o eliminarla nunca.

Blockchain es un libro de transacciones perfecto e infalsificable

## Cadenas de bloques
Es una base de datos distribuidas que almacena las transacciones y estas las agrupa en bloques, tiene un identificador que es su hash(`huella digital`) de su contenido.

La relaccion entre bloques, esto quiere decir que los hash estan conecntadas para poder verificar que nungunos de los bloques hayan sido modificadas.En el caso de que alguien intente modificar un bloque tambien haria su hash por lo que las relacciones con los demas bloques seria invalida

## Caracteristica de Blockchain
Se mencionan algunas caracteristicas de blockchain de porque es lo que la hace innovadora y revolucionaria

* Es una red peer to peer: aqui un usuario utiliza y la compone, por lo que lo hace igual antes todos y ademas puede cambiar el rol que desempeñe.
* Es distribuido: esto quiere decir que todos lod usuario tiene accesos a los datos de toda la red , en el caso que se intentara editar las demas copiar la rechazarian.
* Es descentralizada: aqu no hay un nodo que tome desiciones sino que todos los nodos cuando se va a realizar una transaccion tienen que aprobarlo.
* Inmutable: una vez que se haya escrito no se puede editar, por loq ue favorece para la auditoria

## Blockchain como base de datos distribuida
cuando se tiene una base de datos centralizada hay un nodo central en donde se puede acceder a los datos, en el caso de que este nodo centra deje de funcionar seria imposible a los demas nodos obtener los datos y mas aun si se elimina no habia copia de seguridad que respalde.

En cambio los datos descentralizados si en alguno de los nodos ocurre algun problema igual vamos a poder acceder a los datos ya que los demas nodos tiene una copia completa de todos los datos.

## Descentralizacion de Blockchain
En un sistema centralizado los nodos diferentes al nodo central la cual realiza las operaciones sobre los datos confian en este, pero que pasaria si alguna persona intentara atacar a este nodo o tratara de editar los datos ?. Pues el poder que tiene este nodo centra es muy fuerte y peor aun si sufre de algun tipo de ataques.

Blockchain es un sistema descentralizado por lo que cualquier modificacion en los datos son responsables los intermediarios de su gestion

## ¿Que participantes tiene Blockchain?

+ Los desarrolladore: son los encargados de desarrollar el software que implementa el protocolo
+ Usuarios: Estos van a ejecutar un sofware ademas de asignarles una cuenta para que puedan realizar transacciones y sincronizar sus datos con los demas usuarios de la red
+ Mineros: Utilizan su fuerza computacional, lo que les permite participar en la comparacion de bloques a traves en la competicion de trabajo ademas de recibir una recompensa en divisas

## Hashing
Las funciones hashing convierten un texto a un hash , el tamaño de este hash es independiente de la longitud del texto por lo que los hash seran similares en longitud, esta funcion es deterministe por lo que quiere decir es que al ingresar un texto vamos a tener el mismo hash y cuando solo agregamos una letra todo el hash es distinto. Lo hashes no son revertibles , es decir que no podemos pasar de un hash a texto pero podemos usar una funciona que compare el hash con el texto transormado

## Hashing en la cadena de bloques
Los hashes se usan para enlazar un bloque con otro.

Hashes utilizando:
* Bitcoin: SHA-256
* Ethereum: KECCAK-521

Un bloque tiene un hash unico que identifica todos los datos de un bloque , ademas que tener el hash del bloque anterior. En el caso de que alguien quiera modificar el hash de uno de los bloques los demas bloques invalidan y se va a propagar en los demas

Condiciones para un has valido:
* El hash tiene que estar por debajo de la dificultad objetivo establecid por el bloque
* Modificamos el has cambiando el numero NONCE hasta dar con el valido

```
hash del bloque + nonce < dificultad
```

esto daria un bloque valido, pero mientras mas pequeño sea la dificulta mas deficil sera calcular el hash (Algoritmo Proof of Works)

El trabajo de los mineros es verificar los bloques y el ganador va a emitir un NONCE por lo que los demas bloques tendran que validar este numero.

## Recompensa de minado
El minero cuando halla el NONCE tiene que enviar a los demas nodos para que sea verificado , al hallarlo tiene todo el derecho de insertar una trasaccion lo cual se le otorgara por su trabajo una divisa como recompensa por participar en la prueba de trabajo.

Recompensa en divisa es de 12.5 bitcoins o 3 Ethers.Ademas que este minero recibe las comiciones que se han cobrado a los usuarios que han realizado transacciones en ese bloque y en el caso que estos mineros intentaran falsear informacion ademas que el valor de la divisa disminuiria fuertemente.A esta comision tambien se le conoce como GAS.

## Tiempo de minado de bloques
hay un tiempo por defecto para generar un nuevo bloque despues de que el anterior fue creado.

* Bitcoin: 10 minutos
* Ethereum: 15 segundos 

El sistema va incrementando la dificultad si el sistema de resolucion de bloques es bajo o disminuye la dificultad si el tiempo de resolucion esta por encima del tiempo establecido.

## Transacciones en Ethereum
* cada usuario tenie una cuenta y una clave privada para poder enviar y recibir divisas.Nuestra clave priada es vital ya que si alguien accesidera podria borrar todos los fondos que tengamos
* Los usuarios pueden firmar transacciones con su clave privada + mensaje
* formato de la transaccion
```
From: 0xe3Fabjasdj3432sdjbajsndinas
to: 0xOuhui7h210skd01n0dniwqdijas
Value: 3 ether
```

### Tipos de transacciones
* usuario a usuario: es una transferencia de divisas de una cuenta a otra.
* usuario a smart contracts: es una trasaccion que se envia a un smart contracts, son problemas en la cadena de bloques y son inmutables

### Informacion de una transaccion en Ethereum
* TxHash: hash de la transaccion que es su indentificador
* Timestamp: fecha de la transaccion
* Block: numero de bloque donde se realiza la transaccion
* GAS Limit: candidad de GAS que el usuario esta dispuesto a pagar por transaccion
* GAS Used: cantidad final de gas que se utilizo para la ejecucion de dicha transaccion
* GAS Price: precio por unidad de gas que se encontro vigente en el bloque
* Input data: estan vacios cuando hacemos transaccion de divisas y cuando interactuemos con los smart contracts tendran el codigo de este o datos de interaccion

```
si el GAS limit< Gas Price
la transaccion se aborta y todos los cambios se revertiran
```

## Detalle de un bloque de Ethereum
* Timestamp: fecha y hora en la cual se genero el bloque
* Transactions: es la lista de transacciones que estan en el bloque
* Hash: indentificador unico del bloque
* Mined by: direccion de Ethereum del minador que galo el algoritmo de consenso
* Difficulty: valor de la dificultad del bloque para ajustar la complejidad del minado
* GAS used: GAS total de comisiones por cada transaccion
* GAS limit: GAS maximo establecido en el bloque
* NONCE: Solucion del miner para encontrar un hash por debajo de la dificultad, es el resultado de la prueba de minado y su validacion.
* Block reward: Cantidad de ethe que gano el minero(divisa por bloque + comision por transaccion)

## Smart contracts
Es un programa que vive en la cadena de bloque y todos los nodos tienen una copia, se ejecuta y se cumple de manera autonoma y automatica sin intermediarios