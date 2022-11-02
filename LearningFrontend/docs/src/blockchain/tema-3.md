# 3er Curso Solidity

## Funciones globales
```
block.blockhash(# de bloque) -> devuelve el has de un bloque dado

block.coinbase -> devuelve direccion del minero que procesa el bloque actual

block.difficulty -> devuelve la dificultad del bloque actual

block.gaslimit -> devuelve el limite de gas del bloque actual

block.number -> devuelve el numero del bloque

block.timestamp -> devuelve el timestamp del bloque actual

msg.data -> datos enviados en la trasaccion

msg.gas -> devuelve el gas que queda

msg.sender ->  devuelve el remitente de la llamada actual

msg.sig -> devuelve los cuatro primeros bytes de los datos enviados en la tx

msg.value -> devuelve el numero de Wei enviado con la llamada

now -> devuelve el timestamp del bloque actual

tx.gasprice -> devuelve el precio del gas de la transaccion

tx.origin -> devuelve el emisor original de la trasaccion
```

## Funcion Keccak256
- es una funcion criptografica que realiza el computo del hash de los argumento que se pasen por paremetros
- se basa en el algoritmo SHA-256, es un algoritmo seguro de computo
- retorna un hash de 256 bits -> 32 bytes
- no se peude pasar facilmente, por ejemplo una variable de texto
- solo recibe datos de tipo `bytes`

```
keccak256(<argumentos>);
```

Para calcular el hash con keccak256() hay que usar abi.encodePacked() para psar los argumentos a tipo byte

```
// para poder usar la funciona abi.encodePacked
pragma experimental ABIEncoderV2;

contract Prueba{
    ...
    ...
    keccak256(abi.encodePacked(<valores>));
    ...
    ...
}
```

## Variables y operacioens

### Variable enteras con y sin signo
descripcion | tipo
------- | -------
Variables enteras sin signo | uint
Variables enteras con signo | int

especificar el numero de bits de la variable entera

```
uint<x> <nombre_variable>
int<x> <nombre_variable>

<x> -> de 8 a 256 en multiplos de 

rango -> 2^(# bits)
```

### Variable string
Las vriables string son cadena de texto UTF-8 de longitud arbitraria

```
string <nombre_variable>;
```

### Variable booleana
Las variables booleanas pueden tomar dos valores `true o false`

```
bool <nombre_variable>;
```

### Variable bytes
Las variable de tipo bytes contienen una secuencia de bytes

```
bytes<x> <nombre_variable>;

<x> varia de 1 hasta 32
```

### Variable address
Las variables de tipo address contienen una direccion de 20, hace referencia a la direccion de un usuario o un smart contract

```
address <nombre_variable>;
```

### Enum en solidity
Son una manera para el usuario de crear su propio tipo de datos

```
enum <nombre_enumeracion> (valores enumeracion)
```

Declaracion de una variable de tipo enum
```
<nombre_enumeracion> <nombre_variable>
```

### Casteo de variables
Podemos tranformar un unit (o un int) con `y` numeros de bits a un unit (o un int) con `x` numeros de bits

```
uint<x> (<dato_uint<y>);
int<x> (<dato_int<y>);
```

tambiein podemos transformar un int con `y` numero de bits a un uint con `x` numero de bits y viceversa

```
uint<x> (<dato_int<y>);
int<x> (<dato_uint<y>);
```

### Modificador public
- Al añadir este modificador al declarar una variable, se creara una funcion getter.
- sera visible dentro de la interfas del contrato para su visualizacion.
- Sera visible dentro y fuera del contrato al ser llamada demas para su uso.

```
<tipo_dato> [public]* <nombre_variable>;
```

### Modificador private e internal
- private: Solos es accesible desde dentro del contrato pero no de contratos de deriven de este.
- internal: solo son accesible internamente y de contratos de deriven de este.

```
<tipo_dato> [private|internal]* <nombre_variable>;
```

### Modificadores memory y storage
- memory: Guarda de manera temporal y despues se borran de la memoria (las variables dentro de las funciones son por defecto memory)
- storage: Guarda de manera permanente en la blockchain (las variables de estado son por defecto storage)

```
<tipo_dato> [memory|storage]* <nombre_variable>;
```

### Modificador payable
- Este modificador nos permite enviar recibir ether, solo sirven para las variables de tipo `address`.
- La direccion que declaremos tiene que ser la del usuario
- tenemos que colocar el modificador si o si para recibir o enviar, si no se coloca no se realizara ninguna de estas acciones


```
address [payable]* <nombre_variable>
```

### Operadores de variables y booleanos

operador math | descripcion |
---------|----------|
  '+' | suma |
  '-' | resta |
  '*' | multiplicar |
  / | division |
  % | modulo |
 ** | exponenciacion |

 comparadores | descripcion |
---------|----------|
  '>' | mayor estricto |
  '<' | menor estricto |
  '>=' | mayor o igual |
  '<=' | menor o igual |
  == | igualdad |
  != | inigualdad |

 operadores bool | descripcion |
---------|----------|
  ! | negacion |
  && | and |
  || | or |
  == | igualdad |
  != | inigualdad |

# Estructuras

## Estructura en solidity
Las estructuras nos permite definir tipos de datos mas complejos

```
struct <nombre_estructura> {
    <tipo_dato1> <nombre_variable_1>;
    <tipo_dato2> <nombre_variable_2>;
    <tipo_dato3> <nombre_variable_3>;
    <tipo_dato4> <nombre_variable_4>;
    .....
}
```

para crear una varaible del tipo `estructura` debemos hacerlo del siguiente modo.

```
// declaracion
<nombre_estructura> <nombre_variable>;

// declaracion e inicializacion
<nombre_estructura> <nombre_variable> = <nombre_estructura> (<propiedades_esturura>)<>
```

## Mapping
Es una asociacion clave-valor para guardar y ver datos.

```
mapping (_keyType => _valueType) [public]* <nombre_mapping>
```

- keyType: puede ser casi cualquier tipo de dato pero no puede ser otro mapping.
- valueType: puede ser cualquiera incluyendo otro mapping.

```
// guardar datos
<nombre_mapping> [_key] = _value;

// leer dato
<nombre_mapping> [_key];
```

## Arrays

- Longitud fija
```
<tipo_dato> [<longitud>] [public]* <nombre_array>;
```
- Longitud dinamica
```
<tipo_dato> [] [public]* <nombre_array>;
```

para añadir un elemento al final.
```
<nombre_array>.puch(<value>);
```

para obtener la longitud del array
```
<nombre_array>.length;
```

# Funciones

## Modificador view, pure y payable

- view: No modifica datos pero si accede a ellos
- pure: No accede ni siquiera a los datos
- payable: permite recibir ether

```
function <nombre_funcion>(<tipos_parametro>) [public|private] [view | pure | payable]* [returns(<return_types>)]*
```

## Eventos
Los eventos comunican un suceso en la cadena de bloques

- Declarar un evento
```
event <nombre_evento>(types);
```
- Emitir un evento
```
emit <nombre_evento>(values);
```

# Interactuando con varios smart contracts

## Herencia
- La herencia simplifica y organiza el codigo.
- Nos permite la definicio de un nuevo a partir de otro contrato.
- Nos permite compartir las funciones y variables de un contrato a otro , pero esto con los modificadores que nos permitan hacer estas(internal y public).

```
contract <nombre_contrato_1>{
  .....
}

contract <nombre_contrato_2> is <nombre_contrato_1>{
  .....
}
```

## Imports
Para poder usar un contrato en nuestro proyecto, debemos previamente impotarlo

```
import "./<nombre_contrato>.sol"<

import {<contratos>} from "./<nombre_contrato>.sol"
```

## Librería
EL uso de librerias permite facilitar el uso de funciones externas

```
library <nombre_libreria>{
  .....
}
```

Uso:
```
// importar la libreria
import <nombre_libreria> from "./<nombre_archivo.sol>";

// definir la libreria por su nombre
using <nombre_libreria> for <tipo_dato>;
```

> Podemos usar el valor `*` para <tipo_dato> que indica que podemos usar cualquier tipo de dato

### Interfaces
Para poder interactura con otro contrato de una blockchain es necesario hacer uso de una interfaz

```
contract <nombre_interfaz>{
  // declarando la funcion con las que queremos interactuar
  function <nombre_funcion>...;
}
```

Uso
```
// declarar un puntero que apunte al otro contrato
<nombre_interfaz> <nombre_puntero> = <nombre_interfaz> (direccion_contrato)

// usar el puntero para usar las funcionalidades del otro contrato en la interfaz
<nombre_puntero>.<funcion>(<parametros>);
```

## Funciones Avanzadas


### Modificador internal y 
- Internal: Es parecido a private pero son la diferencia que se puede llamar desde el contrato actual o contratos que deriven de el
- Enternal: Solo puede llamarse de un contrato externo

```
function <nombre_funcion>(<tipo_parametros>) [ public | private | internal | external ] [ view | pure | payable ]* [returns(<return_types>)]*{
  ...
}
```

### Require
Lanaza un error y para la ejecucion de una funcion si la condicion no es verdadera

```
function <nombre_funcion>(<tipo_parametros>) [ public | private | internal | external ] [ view | pure | payable ]* [returns(<return_types>)]*{
  require(<condicion>, [<mensage_condicion_falsa>]*);
}
```

### Modifier
Permite cambiar el comportamiento de una funcion de manera agil

```
modifier <nombre_modificador> (<parametros>)*{
  require(<condicion>);
  _;
}

function <nombre_funcion>(<tipo_parametros>) [ public | private | internal | external ] [ view | pure | payable ]* [returns(<return_types>)]*{
  ...
}
```

## Fabrica de Smart Contracts
Creacion de un Smart Contract a partir de una funcion de otro Smart Contract

```
contract SmartContract1{
  Funcion Factory() public{ 
    adress direccion_nuevo_contrato = address (new SmartContract2(parametros));
  }
}

contract SmartContract2{
    contructor(parametros) public{...}
  }
```