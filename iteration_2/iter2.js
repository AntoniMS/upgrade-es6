console.log("______ITERATION2.1_____");
/*DESTRUCTURING:
 2.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola.*/
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};
let { title, gender, year } = game;
console.log(title, gender, year);



console.log("______ITERATION2.2_____");
/* En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, 
con los valores del array. Posteriormente imprimelo por consola. */
const fruits = ["Banana", "Strawberry", "Orange"];
let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);



console.log("______ITERATION2.3_____");
/* 
2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola. */

const animalFunction = () => {
  return {name1: 'Bengal Tiger', race: 'Tiger'}
};
let {name1, race} = animalFunction();
console.log(name1,race)



console.log("______ITERATION2.4_____");
/*2.4.En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. 
Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta 
bien imprimiendolo.*/

const car = { name2: "Mazda 6", itv: [2015, 2011, 2020] };
let { name2, itv } = car;
let [itv1, itv2, itv3] = itv;
console.log(car);
console.log(name2, itv);
console.log(itv1, itv2, itv3);