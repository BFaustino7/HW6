function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  
 // var n = Math.log2(numero);
 // var raizN = Math.pow(numero, 1 / n);
 // while(n >= 1){
 //   if(raizN !== 2){
 //     return false
 // } else if(raizN === 2)
 //   return true
 // }
  
 
 var i = numero
 while(i >= 1){
   if(i === 1){
     return true
   }
    i = i / 2
 }
  return false
}


module.exports = esPotenciaDeDos;

