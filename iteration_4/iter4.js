//3.1Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [
    { id: 1, name: "Abel" },
    { id: 2, name: "Julia" },
    { id: 3, name: "Pedro" },
    { id: 4, name: "Amanda" },
  ];
  
  const usersName = users.map(user => user.name);
  console.log(usersName);

  //4.2Dado el array, devuelve una lista que contenga los valores de la propiedad .name y
//cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const usersTwo = [
    { id: 1, name: "Abel" },
    { id: 2, name: "Julia" },
    { id: 3, name: "Pedro" },
    { id: 4, name: "Amanda" },
  ];
  
  const usersNameTwo = usersTwo.map((userTwo) => {
    let letter = "A";
    if (userTwo.name[0] === letter) {
      return "Anacleto";
    } else {
      return userTwo.name;
    }
  });
  
  console.log(usersNameTwo);

  //3.3Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor
//de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
    { isVisited: true, name: "Tokyo" },
    { isVisited: false, name: "Madagascar" },
    { isVisited: true, name: "Amsterdam" },
    { isVisited: false, name: "Seul" },
  ];
  
  const VisitedCities = cities.map((city) => {
      if (city.isVisited) {
          return city.name + ": Visited.";
      } else {
          return city.name + ": Not Visited.";
      }
  
  });
  
  console.log(VisitedCities);
  