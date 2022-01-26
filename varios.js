const vector=[10,20,30,40,50,60,70,80,90];
vector.forEach((data,indice,array) => {
    console.log(data,indice,array,array[0]);
})
//se tiene un array de nombres de personas
//se pide devolver el array que incluya unicamente los
//nombres que tiene una sola palabra
const nombres = ["Juan","Pedro","Maria","Hector Perez","Jose de la Cuadra"]

function getnombresdeunapalabra(array){
    return array.filter (data =>{
        
        return data.indexOf(' ')==-1;
    })
}
const nom = getnombresdeunapalabra(nombres)
console.log(nom);

//una funcion recibe cadena de caracteres 
//se pide que la funcion devuelva la palabra ingresada sin consonantes
//por ejemplo: Universidad
//Resultado Esperado Uieia

function palabras(str) {
    var vocales = ["a","e","i","o","u"]
    return str.split("").filter (data => {
        return vocales.indexOf(data.toLowerCase())!=-1;
    }).join('');
}
const p1=palabras("Universidad");
console.log(p1);

//una funcion recibe un array de palabras.
//se pide que la funcion devuelva la palabra que tenga la misma vocal
//Entrada ["amalgam","zoom","casa","jinete","iglesia"]
const palabrass = ["amalgam","zoom","casa","jinete","iglesia"];
function palabrasvocales(array) {
    return array.filter(data =>{
        const vocales = palabras(data);
        
    })
   
}

const palabra = palabrasvocales(palabrass)
console.log(palabra);