/*CLASSROOM MANAGER PROGRAM*/

const students = [{
  age: 20,
  examScores: [],
  gender: 'male',
  name: 'Edu',
  icon: '♂'
},
{
  age: 22,
  examScores: [],
  gender: 'female',
  name: 'Paloma',
  icon: '♀️'
},
{
  age: 18,
  examScores: [],
  gender: 'female',
  name: 'Silvia',
  icon: '♀️'
}, {
  age: 40,
  examScores: [],
  gender: 'male',
  name: 'Pablo',
  icon: '♂'
},
{
  age: 33,
  examScores: [],
  gender: 'female',
  name: 'Ariadna',
  icon: '♀️'
},
{
  age: 16,
  examScores: [],
  gender: 'male',
  name: 'Orko',
  icon: '♂'
}]

let femaleStudents = students.filter(student => student.gender == "female");
let maleStudents = students.filter(student => student.gender == "male");

const maleIcon = '♂';
const femaleIcon = '♀️';

const availableMaleNames = ['Pepe', 'Juan', 'Victor', 'Leo', 'Francisco', 'Carlos'];
const availableFemaleNames = ['Cecilia', 'Ana', 'Luisa', 'Silvia', 'Isabel', 'Virginia'];
const availableGenders = ['male', 'female'];

// 1. Mostrar tabla con todos los estudiantes

function printStudentsTable() {
  console.table(students);
}
printStudentsTable()

// 2. Mostrar el número total de estudiantes

function getNumberOfStudents(students) {
  const studentsNumber = students.length;
  console.log("En total hay", studentsNumber, "estudiantes");
  return studentsNumber;
}
getNumberOfStudents(students)

// 3. Mostrar el nombre de todos los estudiantes

function getStudentName(student) {
  switch (student.gender) {
    case "male":
      console.log(`Nombre del alumno: ${student.name} (${maleIcon})`);
      break;
    case "female":
      console.log(`Nombre de la alumna: ${student.name} (${femaleIcon})`);
      break;
    default:
      console.log(`Nombre alumno/a/e: ${student.name}`);
  }
}
console.group();
students.forEach((name, gender) => getStudentName(name, gender));
console.groupEnd();

// 4. Eliminar el último estudiante de la clase

function removeLastStudent(students) {
  students.pop();
  console.table(students);
}
removeLastStudent(students)

// 5. Eliminar un estudiante de la clase aleatoriamente

function removeRandomStudent(students) {
  const getRandomStudent = students[Math.floor(Math.random() * students.length)];
  console.table([getRandomStudent]);

  const discardRandomStudent = students.filter(student => student !== getRandomStudent);
  console.table(discardRandomStudent);

  const randomStudentIndex = students.indexOf(getRandomStudent); // obtenemos el indice
  //console.log("Esto es el índice", randomStudentIndex, getRandomStudent.name);
  students.splice(randomStudentIndex, 1); // 1 es la cantidad de elemento a eliminar
  console.table(students);
}
removeRandomStudent(students)

// 6. Mostrar por consola todos los datos de las alumnas (gender: 'female')

function onlyFemaleStudents(students) {
  console.table(femaleStudents);
}
onlyFemaleStudents(students)

// 7. Mostrar por consola el número de chicos y chicas que hay en la clase.

function allGenderStudents(students) {
  const numberOfFemaleStudents = femaleStudents.length;
  const numberOfMaleStudents = maleStudents.length;
  const numberOfAllGenderStudents = numberOfMaleStudents + numberOfFemaleStudents;

  if (numberOfFemaleStudents > 1 || numberOfFemaleStudents == 0) {
    console.table([`En esta clase hay ${numberOfFemaleStudents} mujeres.`])
  } else {
    console.table([`En esta clase hay ${numberOfFemaleStudents} mujer.`])
  }

  if (numberOfMaleStudents > 1 || numberOfMaleStudents == 0) {
    console.table([`En esta clase hay ${numberOfMaleStudents} hombres.`])
  } else {
    console.table([`En esta clase hay ${numberOfMaleStudents} hombre.`])
  }

  console.log(`En esta clase hay ${numberOfAllGenderStudents} estudiantes.`)

  if (numberOfAllGenderStudents > 1) {
    console.group()
    console.log(`${numberOfMaleStudents} son hombres ${maleIcon} y ${numberOfFemaleStudents} mujeres ${femaleIcon}.`)
    console.groupEnd()
  } else {
    console.log(`En esta clase no hay estudiantes.`)
  }
}
allGenderStudents(students);

// 8. Mostrar true o false por consola si todos los estudiantes de la clase son mujeres.

function getAllFemaleStudentsBool(students) {
  console.log(students.every(gender => gender === 'female'))
}
getAllFemaleStudentsBool(students)

// 9. Mostrar por consola los nombres de los estudiantes que tengan entre 20 y 25 años

function getMid20s(students) {
  let isMid20s = students.filter(student => student.age >= 20 && student.age <= 25);
  let studentsIn20s = isMid20s.map(function (student) {
    return student.name;
  });
  if (isMid20s.length >= 1) {
    console.log("Estudiantes entre 20-25 años:", studentsIn20s);
  } else {
    console.log("No hay estudiantes entre 20-25 años");
  }
  console.table(isMid20s)
}
getMid20s(students)

// 10. Añadir un estudiante nuevo con los siguientes datos:
//- nombre aleatorio.
//- edad aleatoria entre 20 y 50 años.
//- género aleatorio.
//- listado de calificaciones vacío.

function addRandomStudent() {
  const getRandomGender = availableGenders[Math.floor(Math.random() * availableGenders.length)];
  let getRandomName = null;
  let getIcon = null;
  if (getRandomGender === 'female') {
    getRandomName = availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)];
    getIcon = femaleIcon
  } else {
    getRandomName = availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
    getIcon = maleIcon
  }
  const min = 20
  const max = 50
  let getRandomAge = Math.floor(Math.random() * (max - min) + min);
  students.push({
    age: getRandomAge,
    examScores: [],
    gender: getRandomGender,
    name: getRandomName,
    icon: getIcon
  })
  console.table(students)
}
addRandomStudent(students)

// 11. Mostrar por consola el nombre de la persona más joven de la clase

function getYoungestStudent(students) {
  const youngestAge = Math.min(...students.map(item => item.age));
  let youngestStudent = students.filter(student => student.age == youngestAge);
  let youngestStudentName = youngestStudent.map(function (student) {
    return student.name
  });
  console.log(`El más joven de la clase es ${youngestStudentName} y tiene ${youngestAge} años`);
}
getYoungestStudent(students)

// 12. Calcular la media de edad de todos los estudiantes
function getAverageAge(students) {
  return students.reduce((prev, student) => prev + student.age, 0) / students.length;
}
console.log(`La media de edad de la clase es:${getAverageAge(students).toFixed(2)} años`);

// 13. Mostrar por consola la edad media de las chicas de la clase

function getFemaleAverageAge(students) {
  //console.table(femaleStudents);
  let femaleAgerageAge = getAverageAge(femaleStudents).toFixed(2)
  console.log(`La media de edad de las mujeres de la clase es ${femaleAgerageAge} años`)
}
getFemaleAverageAge(students)

// 14. Añadir nueva nota a los estudiantes. Por cada estudiante:
//- calcular una nota random (de 0-10)
//- añadirla a su listado de notas

function addRandomScore() {
  const min = 0
  const max = 10
  students.forEach(function (student) {
    let randomScore = Math.floor(Math.random() * (max - min) + min)
    student.examScores.push([randomScore])
    console.log("Nuevo estudiante añadido")
    console.table([student])
    console.log("Base de datos de estudiantes actualizada")
    console.table(students)
  })
}
addRandomScore(students)

// 15. Ordenar el array de alumnos alfabéticamente, según su nombre.

function sortAlphabetically() {
  console.table(students.sort((a, b) => a.name.localeCompare(b.name)))
}
sortAlphabetically()