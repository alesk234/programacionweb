//DEFINICIÓN DE UNA FUNCIÓN
/*
function hello(){
    //las funciopnes pueden retornar valores, esta ocación retornaremos solamente un string
    console.log('Hola clase');
    console.log(' 5IV7');
}
//llamada a la función hola
hello();
hello();
hello();
hello();
hello();
*/
//Retorno de una función
/*
function hello(){
    return 'Hola clase';
}

const result = hello();

console.log (result);
*/
//Función que retorna otra función
/*
function hello(){
    return function(){
        return 'hola soy la función 2';
    }
}
// Funcion parametros
console.log (hello()())
*/
/*
//función parametros
function add(x){
    console.log(x);
}
add(3);

*/
//multiparámetros
/*
function add(x,y){
    console.log(x+y);

}
add(2,undefined)
*/
//control de error en multiparámetro
/*
function add(x,y){

    if (y===undefined){
        y = 0;
    }

    console.log(x+y);

}
add(2,undefined)
*/
//parámetro de tipo cadena
/*
function add(name){
    console.log('hola ' + name);
}
add("clase JS");
*/


//objetos
const user = {
    nombre: 'Alvarado',
    apellidop: 'Reyes',
    apellidom: 'Quiroz',
    edad:91,
    direccion:{
        calle: ' Nicolas Bravo',
        no:598,
        colonia:' Narvarte',
        Delegacion: ' Los pinos',
    },
    amigos:['Raul', 'Maria'],
    activo:true
}

if(user.activo == true){
    estado = 'Activo';
} else {
    estado = 'inactivo';
}

const lol = user.direccion.colonia +' '+ user.direccion.no + user.direccion.calle + user.direccion.Delegacion;
console.log(user.nombre, user.apellidom, user.apellidop)
console.log(user.edad);
console.log(user.amigos);
alert(estado);
alert(lol);


// por consola debe de tener nombre, apellido p, apellido m 
// alert activo;
//por consola poner edad
//alert calle, numero, colonia delegación
//consola amigos