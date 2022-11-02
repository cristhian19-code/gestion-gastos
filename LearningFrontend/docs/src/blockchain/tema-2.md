# Introduccion a Blockchain

## Nacimiento y evolucion de la tecnologia Blockchain
* Surguio de manera teorica aproximadamente a finales de los 80
* En el 2009 Satoshi Nakamoto desarrollo la primera red blockchain `Bitcoin`
* Blockchain es la tecnologia que esta por debajo de `Bitcoin`
* Se desarrolla Bitcoin a traves del articulo `Bitcoin: A Peer-to-Peer`

## Que es Blockchain
* Es un registro de informacion distribuida `Peer to Peer` , esto quiere decir que no vamos a confiar en un tercero ademas que se realiza gracias al protocolo de consenso
* Inmutabilidad de las cadenas , esto quiere decir que es imposible editar o borrar informacion
* Cada bloque es identificado gracias a su hash generado ademas de estar firmado por la persona que encontro dicho codigo `miner`
* La unica forma de poder editar la informacion es a traves de las transacciones
* La informacion es publica y visible a los ojos de todos , pero anonima ya que no se muestra la identidad de la persona que hizo la tranferencia
* Las redes `Peer to Perr`, aqui es donde todos los nodos tienen igual informacion `distribuida`
* El protocolo de consenso `Proof of Work` , cada vez que un minero valide un bloque recibira una recompensa en cripomonedas

## Tipos de Blockchain

| Tipos | Ejemplos |
|-------|----------|
| Publica| Bitcoin, Ethereum |
| Privada| Hyperledger |
| Permisionada/Federada | Alastra |
| Blockchain as a Service| IBM, Microsoft, Amazon|

- La seguridad de las blockchain publicas es gracias al protocolo de consenso y las funciones hash, la interaccion de los usuario es anonima
- La blochchain privada ua entidad tiene el control, da permiso a los ususario que quieran participar, tambien aqui se pierda la descentralizacion
- Las blockchain federadas no satisface la definicion de las publica, surgen con la idea de servir como base de datos descentralizadas con el control de varias entidades a cargo
- Blochchain como servicio , funciona para el almacenamiento de datos en la nube `Cloud`

## Comparativa en los tipos de blockchain

![Comparativa de los tipos de blockchain](https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/06/Blockchain-comparativa.png)

## Aplicacion de la tecnologia blockchain

- **Sistema de votacion**: Cuando vamos a votar desconfiamos en que realmente los datos sean veraces ya que puede ser modificado en el proceso, ademas de ser anonima y transparente con los resultados.
- **Sistema de validacion y emision de titulos universitarios**: Esto se debe porque en ciertas ocaciones en donde la persona falcea su titulo universitario y en otros caso hasta venden estos titulos.
- **Cadenas de suministros**: Podemos saber de donde vienen los productos , su veracidad de estos y quien los envia, todo esto de una manera transparente 

## Bitcoin
- Es la blockchain que tiene una mayor demanda a nivel de mercado
- Es contravertida en el sentido que para los mineros les exige un consumo alto de energia y computacional para poder resolver la prueba de trabajo
- Es un sistema de dinero en efectivo electronico `peer to peer`

## Como realizar una trasaccion en Bitcoin  

![proceso para realizar una transaaccion en bitcoin](https://i0.wp.com/ticsyformacion.com/wp-content/uploads/2015/04/transaccion-bitcoin-infografia.png?ssl=1)

# Arquitectura

- Arquitectura Centralizada: Es aquella en donde los datos se almacenan un en solo lugar fisico.
- Arquitectura Descentralizada(Federadas): Es aquella en donde hay varios puntos en donde se almacena las informacion, pero esto no significa que sean transparente.
- Arquitectura Distribuida: Es aquella en donde la informacion es igual en todos los nodos por lo que es accesible para todos los usuario que la componen, la informacion es transparente por lo que cualquiera puede acceder

## Peer to Peer
EL modelo cleinte servidor es en donde hay varios intengrante, como los clientes y los servidores. El servidor es el que provee los datos a los usuarios cuando estos se lo solicita.

- El modelo peer to peer los usuario o nodos solo estan relacionado por un numero de enlaces vecinos `2`
- cuando un nodo quiere informar a otro entonces le envia esta informacion a sus vecinos y estos a sus tros vecinos para que de este modo llegue a todos los nodos de manera igualitaria.
- Cuando una informacion es invalida como tratar de enviar divisas que no se tengan los nodos la ignoras y no se propaga por los nodos.
- Las opciones que tiene un nodo o usuario es igualiraio para los demas que la componen que es totalmente contraio a un modelo cliente-servidor
- ventaja en el caso es que si un nodo tenga una caida o sufra de un ataque no influira en los demas en la obtencion de informacion o realizar alguna transaccion.

# Caracteristicas principales de Blockchain

## Sin necesidad de confianza
- Se asume que todos los participantes son de confianza , esto quiere decir que los integrantes no van a introducir informacion falsa
- El protocolo de consento en los bloques no se necesita que uno confie en otro.
- Los mineros tiene la funcion de:
  - crear nuevos bloques
  - verificar los bloques que se van añadiendo la cadena
- Los mineros buscan el numero que resuelva el bloque y encuentran el hash del mismo, cuando se halla se notifica a los demas integrantes de la red para verificar si es correcto.

## Privacidad
- Cuando nos creamos una cuenta en `Metamask` para poder tener nuestras cuentas para realizar las transferencias , esta esta enlazada a travez de la criptografia asimetrica. 
- La criptografia asimetrica esta compuesta por una clave publica y privada
- Solo podemos decifrar esta clave con la clave privada y saber quien le hizo la transferencia
- Se esta creando una clave privada y con esta crear muchas claves publica y al juntarlos tenemos la direccion de nuestra billetera
- Podemos decifrar el mensaje cifrado con la clave publica del usuario que realizo la trasaccion.

# Conceptos tecnicos
- Hashing: Es un algoritmo matematico que transforma cualquier bloque de datos en una nueva serie de caracteres alfanumericos
  - Esto se ve en los bloques ya que cuentan con su indentificador y el del bloque anterior
  - La encriptacion de los mensajes enviados en una trasaccion
  - ES muy sensible a los cambios, por lo que si solo agregamos un caracter la cadena va a cambiar considerablemente
  - Es una huella digital de un bloque que lo identifica
  - Es determinista , esto quiere decir que tendremos el mismo hash para un mismo texto
  - Es casi imposible realizar la ingenieria inversa
  - Para validar un texto con el hash, este texto se tienie que transformar y compararlo con el hash para poder validarlo
  - El hash del bloque viene dado por: `HASH -> SHA256(Numero de bloque,datos,hash del bloque anterior)` y si en alguna ocacion cambia se rompe la cadena de bloques
- SHA-256:  Es un algoritmo de alto nivel de seguridad la cual es perfecta de proteccion y codificar las tareas.
  - es utilizado por bitcoin
  - se desarrollo en el entorno de la guerra
  - su objetivo es generar hashes seguros y que ningun agente externo pueda descifrarlo
- Mineria & Proof of Work(PoW): Prueba de esfuerzo basada en el coste computacional de realizar una operación. En el caso de Bitcoin, esta prueba consiste en encontrar un valor determinado (nonce) el cual, concatenado a todas las transacciones del bloque y al hash del bloque anterior, proporcione un digest menor que un umbral determinado. El bloque cuyo nodo minero obtenga el resultado en primer lugar será introducido en la blockchain.Los mineros compiten para poder conseguir el numero `NONCE` y solo uno se hacer acreedor de la reompensa de conseguirlo. La probabilidad de conseguirlo es de 16<sup>-18</sup>, al aumentar la cantidda de minero aumenta la dificultad para poder asi garantizar de agregar bloques cada 10 minutos. Hay miles de mineros en la labor de iterrar el valor del `NONCE` con la esperanza de encontrar un has valido del proximo bloque.
- Mempool: Es un area de ensayo en donde se van a tener las transacciones de los usuarios.

# Proof of Stake
Prueba basada en las criptomonedas que ha puesto en stake un nodo minero para otorgar el poder de publicación del próximo bloque. Esta participación puede tratarse simplemente de la cantidad total de monedas que posee cada nodo, o bien de una combinación de distintos parámetros, como por ejemplo, la antigüedad de las monedas que posee el minero. Este tipo de prueba será utilizado por Ethereum en el futuro debido a las mejoras que presenta frente a Proof-of-Work.
- El problema de PoW es la falta de escalavilidad y velocidad , ya que cuando se mina aumenta la latencia con el fin de validar los bloque
- En PoS la verificacion lo hace los nodos con una alta tendencia de modas, por lo que las verificacion se realizar de manera muy rapida.
- En PoS cambia el proceso de mineria por un proceso de participacion dentro de la red.
- Descentraliza la red , ya que el trabajo minero solo esta al alcance de empresa con capital y no de los demas por lo que con PoS diversica y democratica en las tarea de la red.
- Intenta restar interes del ataque del 51%, ya que si hay una empresa minera con este porcentaje puede manipular la blockchain.

# Ethereum
Es una plataforma digital que adopta la tecnologia de `blockchain`, su moneda es el `ehter` la cual es la segunda mas grande del mercado. La intension del creador, Vitalik Buterin, es de crear un instrumento para aplicaciones descentralizadas.

## Smart Contracts
Para entender que es un `smart contract`, tenemos que saber que un contrato no es mas que un acuerdo entre 1 o mas partes y hay acuerdos que se tienen que cumplir en base a leyes.Un contrato inteligente nos trae como beneficion en la reduccion de costos , mayor credibilidad ya que es digital. Es descentralizado en la toma de desiciones , es inmutable y transparente ya que cualquier persona lo puede ver. Para la creacion de este contrato tiene que ser programado por una persona la cual tiene que realizarce de una manera muy cuidadosa.

## Solidity
- Es el lenguaje de programador para el desarrollo de los contrado , este lenguaje se presenta como un turing
completo.
- Gracias a solidity y la EVM los desarrolladores pueden realizar aplicaciones de turing completo.
- Es un lenguaje orientado a objeto, fue diseñado para desarrollo de Dapps por lo que solo se ejecuta sobre las blockchain de ethereum o relacionadas.
- Soporta la herencia y la multiple por lo que es muy flexible para programar.
- Proporciona bibliotecas para facilitar el desarrollo de smart contracts.

## GAS
- Es una unidad de medida para medir e trabajo realizado por ethereum para las transacciones dentro de la red.
- Cada tarea en ethereum tiene un coste no variable en GAS.
- Necesitamos GAS para realizar acciones.
- El GAS tiene un precio y esta en `ether`.
- Si el minero no esta de acuerdo con el GAS que se le propone no se realiza la transaccion
- El precio del GAS viene regulado en funcion de la cotizacion de la moneda electronica ether.
- La moneda de ether se mide por weis, `1ether = 10^18 weis`.
- ES el esfuerzo necesario de computo que hacer el minero.

## Ethereum Virtual Machine EVM
- Es una maquina virtual que forma del ecosistema blockchain.
- Es capas de ejecutar una gran cantidad de instrucciones que permite una gran flexibilidad en la ejecucion de ejecuciones.
- Solidity transforma a los codigo de operacion(Oper code) a bitecode y es ejecutado por la EVM.
- Se pueden ejecutar las ordenes programadas en los contratos que al final son codigo.
- Es como un gran ordenador mundial descentralizado que es capas de ejecutar instrucciones a para la realizacion de cualquier tarea.
- Es capas de resolver cualquier problema computacional.
- Para poder usar EVM solo tenemos que tener ether e interactuar con la DApp.

## Aplicaciones descentralizadas(DApps)
- En este tipo de aplicaciones ya no hay un punto en donde se concentra los datos.
- Se puede subir a cualquier red blockchain como ethereum, poligon, etc.
- Los servidores o dispositivos se encuentran distribuidos en cualquier parte del mundo.
- Son autosuficientes, no necesitan colocar publicidad para mantener la aplicaciones.
- Solo el abandono u olvido de los usuario de estas aplicaiones pueden dar fin a la aplicacion.
- Son de codigo abierto, estoy es publico por lo que es publico por lo que cualquier desarrollador puede ver el codigo y mejorarlo o adapte a su pŕoyecto.
- Son inpulsada por un sistema de recompensa que se le da a los contribuyentes EOS, los usuasrio pagar por el uso del servicio y tambien ganan si quieren contribuir al mantenimiento con el proyecto.