const students = [{
    age: 18,
    examScores: [],
    gender: 'male',
    name: 'Edu'
  },
  {
    age: 20,
    examScores: [],
    gender: 'female',
    name: 'Silvia'
  }, {
    age: 25,
    examScores: [],
    gender: 'male',
    name: 'Pablo'
  },
  {
    age: 33,
    examScores: [],
    gender: 'female',
    name: 'Ariadna'
  },
  {
    age: 16,
    examScores: [],
    gender: 'male',
    name: 'Orko'
  }]
  
  const maleIcon = '♂';
  const femaleIcon = '♀️';
  
  const availableMaleNames = ['Pepe', 'Juan', 'Victor', 'Leo', 'Francisco', 'Carlos'];
  const availableFemaleNames = ['Cecilia', 'Ana', 'Luisa', 'Silvia', 'Isabel', 'Virginia'];
  const availableGenders = ['male', 'female'];
  
  //Mostrar tabla con todos los estudiantes
  console.table(students);