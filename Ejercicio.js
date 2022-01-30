// 1)Se pide crear la función/nes que devuelvan aquellas palabras que NO tiene las misma vocal.
//const entrada = ["racecar", "amalgam", "oligopoly", "zoom", "cama", "enano"];
//const esperado = ["racecar", "oligopoly", "enano"];

const entrada = ["racecar", "amalgam", "oligopoly", "zoom", "cama", "enano"];
function Vocales(array){
    var vocal = ["a", "e", "i", "o", "u"];
    return array.split("").filter (data => {
        return vocal.indexOf(data.toLowerCase())!=-1;
    });
}
function palabras(array){
    const r = [];
    array.forEach(data =>{
        const v = Vocales(data);
        for (x=1;x<=v.length-1;x++){
        if(v[0] != v[x])
        r.push(data)
        }
    })
    return r;
    }
console.log("Resultado Final: ", palabras(entrada));
//2) Dado el siguiente vector array=[5,4,20,7,5,10]
//use map, para devolver  cada elemento del vector multiplicado por 10
//resultado esperado [50,40,200,70,50,100]
var valores = [5, 10, 20, 7,5,10];
var resultado;
resultado = valores.map(function(x) {
   return x * 10;
});
console.log("Resultado de la matriz muultiplicado por 10: ",resultado)
//3) Dada la siguiente matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ]
//y usando únicamente map, devuelva cada elemento de la matriz multiplicado por 3
//resultado esperado = [[3, 6, 9], [12, 15, 18], [21, 24, 27] ]
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let res = [];
function Resultado (array){
  array.filter(function(data){
      res.push(data.map(function(x){
       return x * 3;
      }));
 
  });
  console.log("El resultado de las matrizes a igual a : ",res);
};
Resultado(matriz);
//4) Dada la siguiente matriz = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
//utilice reduce para encontrar el producto de sus elementos,
//resultado esperado: 720
const matriz1 = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
const arrayResultado1= [];
function multi(array){
    array.filter(function(data){
        arrayResultado1.push(data.reduce(function(a,b){return a*b}));
    });
    const aux = arrayResultado1.reduce(function(a,b){return a*b});
    console.log("El resultado es igual a: ",aux);
};

multi(matriz1);