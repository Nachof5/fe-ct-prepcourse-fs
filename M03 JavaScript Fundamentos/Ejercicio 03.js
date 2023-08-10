/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if( x === y){
      return true
   }else{
      return false
   }
}
sonIguales(2, 2)
function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   const cant1 = str1.length;
   const cant2 = str2.length;
   if(cant1 === cant2){
      return true;
   }else{
      return false;
   }

}
tienenMismaLongitud("holaa", "mundo")
function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if(num < 90){
      return true
   }else{
      return false
   }
}
menosQueNoventa(50)

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if(num > 50){
      return true
   }else{
      return false
   }
}
mayorQueCincuenta(80)

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if( num % 2 === 0){
      return true
   }else{
      return false;
   }
}
esPar(20)
function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if( num % 3 !== 0){
      return true
   }else{
      return false;
   }
}
esImpar(21)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
