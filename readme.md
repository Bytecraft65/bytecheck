# ByteCheck 
Bytecheck es una biblioteca que ofrece funciones para validar una amplia variedad de tipos de datos, incluyendo cadenas de texto, números, matrices y objetos. Esta biblioteca te permite establecer límites mínimos y máximos de caracteres para validar cadenas de texto, así como validar números de teléfono, direcciones URL y direcciones de correo electrónico. Además, para los números, también puedes establecer límites mínimo y máximo. Ten en cuenta que, en esta versión beta o de prueba, la validación de matrices y objetos aún no está implementada, pero se está trabajando en ello para futuras actualizaciones.

para instalar bytecheck para nodejs se puede hacer de la siguiente manera: `npm i bytecheck`. 
```javascript
const {b,date} = require("bytecheck");

const validator = b.String([
	date("El String no es una fecha valida")
]);

const resultado = validator.validate("17/01/22");
if(resultado.error){
resultado.error.details.forEach((e)=>console.error(e));  
}else{
	console.log("es un email");
}
```
Es importante tener en cuenta que los ejemplos proporcionados son para utilizar ByteCheck con Node.js. Sin embargo, si deseas utilizar ByteCheck en tu página web, simplemente puedes agregar el script y tendrás acceso a todas las funcionalidades sin necesidad de utilizar `require("bytecheck")`.
## Validar email
Para validar un correo electrónico utilizando ByteCheck, sigue estos pasos:

1. Importa las variables `b` y `email` de la biblioteca ByteCheck en tu archivo:

```javascript
const { b, email } = require("bytecheck");
```
2. Crea una variable para configurar el validador. Utiliza la función `b.String(Array)` para definir un array de validaciones. En este caso, vamos a validar un correo electrónico, por lo que solo necesitaremos una validación:


```javascript
const validator = b.String([
  email("Mensaje de error a mostrar si no es un correo electrónico válido")
]);
```
3. Utiliza la función `validate()` en la variable creada para validar una cadena de texto específica. Pasa el String que deseas validar como parámetro:

```javascript
const resultado = validator.validate("correo@example.com");
```
4. El resultado de la validación será un objeto que contiene una clave `error`. Si no hubo ningún error, esta clave será `null`. Si hubo errores, puedes recorrer el array `error.details` utilizando un bucle `forEach` para obtener y manejar cada detalle del error:

```javascript
if (resultado.error) {
  resultado.error.details.forEach((e) => {
    console.error(e);
  });
} else {
  console.log("El correo electrónico es válido");
}
```
Ten en cuenta que puedes personalizar el mensaje de error que se muestra en caso de que la validación falle, reemplazando el mensaje de error en el paso 2.

Esta descripción proporciona una guía paso a paso para validar un correo electrónico utilizando ByteCheck y explica cómo manejar los errores en caso de que la validación falle.
## Validar numeros
Para validar números utilizando ByteCheck, en lugar de utilizar `b.String()`, puedes utilizar `b.Number()`. La función es similar, pero con `b.Number()` puedes utilizar las funciones `min(minimo, mensaje_error)` y `max(maximo, mensaje_error)` para establecer un valor mínimo y máximo para el número. Además, puedes utilizar la función `phone(mensaje_error)` para verificar si es un número de teléfono válido.

Aquí tienes un ejemplo de cómo utilizar `b.Number()` junto con las funciones `min()`, `max()` y `phone()` para validar un número:

```javascript
const { b, phone, min, max } = require("bytecheck");

const validator = b.Number([
  phone("El número no es un número de teléfono válido"),
  min(1, "El número debe ser mayor o igual a 1"),
  max(100, "El número debe ser menor o igual a 100")
]);

const resultado = validator.validate(50);

if (resultado.error) {
  resultado.error.details.forEach((e) => {
    console.error(e);
  });
} else {
  console.log("El número es válido");
}
```
## Funciones de `b`
| Nombre | Descripcion |
|-|-|
| `b.String()` | `b.String()` es una función utilizada para realizar validaciones en datos de tipo string. Como se ha explicado anteriormente, puedes utilizar `b.String()` para aplicar diferentes validaciones a cadenas de texto. |
| `b.Number()` | `b.Number()` es una función similar a `b.String()`, pero está diseñada para realizar validaciones en datos numéricos en lugar de cadenas de texto. La diferencia principal es que `b.Number()` se utiliza para verificar números en lugar de strings. 

El uso de `b.Number()` es muy parecido a `b.String()`, pero cuenta con cinco funciones específicas: `phone()`, `min()` y `max()`,`less()` y `greater()`. |
## Funciones de Validacion
| Nombre | Descripcion | se usa en  |
|-|-|
| minLength(minimo,error) | La función `minLength()` se utiliza exclusivamente con `b.String()` y permite establecer una longitud mínima para una cadena de texto. El primer parámetro que se debe proporcionar es el valor mínimo de caracteres permitidos para el texto, seguido de un mensaje de error que se mostrará si la cadena de texto no cumple con la cantidad mínima de caracteres especificada. | `b.String()` |
| maxLength | La función `maxLength()` es similar a `minLength()`, pero se utiliza para establecer una longitud máxima para una cadena de texto. La diferencia principal es que `maxLength()` se utiliza para limitar la cantidad máxima de caracteres permitidos en el texto. Al igual que `minLength()`, se deben proporcionar dos parámetros: el primero es un número que representa la cantidad máxima de caracteres permitidos, y el segundo es un mensaje de error que se mostrará si el texto supera la cantidad máxima especificada. | `b.String()` |
| email | La función `email()` se utiliza para verificar si un texto es una dirección de correo electrónico válida. El único argumento que se debe proporcionar es el mensaje que se mostrará si el texto no cumple con el formato de una dirección de correo electrónico. | `b.String()` |
| date |La función `date()` se utiliza para verificar si un texto es una fecha válida. El único argumento que se debe proporcionar es el mensaje que se mostrará si el texto no cumple con el formato de una fecha válida.|`b.String()` |
|url| La función `url()` se utiliza para verificar si un texto es una URL válida. El único argumento que se debe proporcionar es el mensaje que se mostrará si el texto no cumple con el formato de una URL válida. |`b.String()`|
| phone | La función `phone()` se utiliza para validar si un texto o número es un número de teléfono válido. El único argumento que se debe proporcionar es el mensaje que se mostrará si el texto no cumple con el formato de un número de teléfono válido. | `b.String()` y `b.Number()` |

|min|La función `min()` se utiliza para establecer un valor mínimo para un número. Los argumentos que se deben proporcionar son: el número que representa el valor mínimo y un texto que se mostrará si el número no cumple con el valor mínimo especificado.|`b.Number()`|
|max|La función `max()` se utiliza para establecer un valor máximo para un número. Los argumentos que se deben proporcionar son: el número que representa el valor máximo y un texto que se mostrará si el número excede el valor máximo especificado|`b.Number()`|
|less| La función `less()` es similar a `max()`, con la diferencia de que `less()` verifica si un número es estrictamente menor que el número especificado. Los argumentos que se deben proporcionar son: el número que representa el valor de comparación y un texto que se mostrará si el número no cumple con la condición de ser estrictamente menor. |`b.Number()`|
|greater|La función `greater()` es similar a `min()`, con la diferencia de que `greater()` verifica si un número es estrictamente mayor que el número especificado. Los argumentos que se deben proporcionar son: el número que representa el valor de comparación y un texto que se mostrará si el número no cumple con la condición de ser estrictamente mayor.|`b.Number()`|
