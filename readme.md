# ByteCheck 
Bytecheck es una biblioteca que ofrece funciones para validar una amplia variedad de tipos de datos, incluyendo cadenas de texto, números, matrices y objetos. Esta biblioteca te permite establecer límites mínimos y máximos de caracteres para validar cadenas de texto, así como validar números de teléfono, direcciones URL y direcciones de correo electrónico. Además, para los números, también puedes establecer límites mínimo y máximo. Ten en cuenta que, en esta versión beta o de prueba, la validación de matrices y objetos aún no está implementada, pero se está trabajando en ello para futuras actualizaciones.

para instalar bytecheck para nodejs se puede hacer de la siguiente manera: `npm i bytecheck`. 
```javascript
const {b,email} = require("bytecheck");

const validator = b.String([
	email("STRING A MOSTRAR SI NO ES UN EMAIL")
]);

const resultado = validator.validate(email);
if(resultado.error){
resultado.error.details.forEach((e)=>console.error(e));  
}else{
	console.log("es un email");
}
```
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

## Funciones de `b`
## Funciones de Validacion