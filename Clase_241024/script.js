// ARREGLOS
/*
let array = ["dato1",1,Boolean];
console.log("Tamaño array:" + array.length);
array.push("2");
console.log(array[3]);
console.log("Nuevo Tamaño array:" + array.length);*/

//hacer tabla del 5 y que se detenga cuando en la memoria tenga 6 espacios


/*
let resultados = [];

for (let i = 1; i <= 10; i++) {
    resultados[i - 1] = 5 * i; 
    console.log("5*"+i+"="+resultados[i - 1]); 

    if(i==5){
        i = 10
    }
}

console.log("Fin del arreglo");
*/

//ELIMINAR ELEMENTO DE UNA ARRAY
let array = ["dato1","dato 2","dato 3"];
array.push("perro 4");
console.log(array[3]);

//Eliminar
array.splice(1,1);
console.log(array)

//hacer una lista de tareas