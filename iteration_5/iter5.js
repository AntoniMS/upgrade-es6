/*Dado el siguiente array, utiliza .filter() para generar 
un nuevo array con los valores que sean mayor que 18*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const moreThanEighteen = ages.filter((age) => age > 18);
console.log(moreThanEighteen);

/*Dado el siguiente array, utiliza .filter() para generar un n
uevo array con los valores que sean par.*/

const agesTwo = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const filteredAges = agesTwo.filter((age) => age % 2 === 0); // !==1 ... !(age % 2)
console.log(filteredAges);

/*Dado el siguiente array, utiliza .filter() para generar un nuevo array con
 los streamers que tengan el gameMorePlayed = 'League of legends'.*/

 const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
  
  const lolStreamers = streamers.filter(
    (streamer) => streamer.gameMorePlayed === "League of Legends"
  );
  
  console.log(lolStreamers);

  //Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que
//tengan el gameMorePlayed = 'League of legends' y tengan menos de 30 años.

  const lolStreamerAge = streamers.filter(
    (streamer) =>
      streamer.gameMorePlayed === "League of Legends" && streamer.age < 30
  );
  
  console.log(lolStreamerAge);
  
  /*Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que
 incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes()
  para la comprobación.*/

  const streamersWithU = streamers.filter(
    (streamer) => streamer.name.includes("u") 
  );
  console.log(streamersWithU);

  /*Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que 
incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.*/

const streamersLegends = streamers.filter((streamer) => {
    streamer.gameMorePlayed.includes("Legends");
    if (streamer.age > 35) {
      return (streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase());
    }
  });
  console.log(streamersLegends);
  console.log(streamers);
