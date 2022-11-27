import readline from 'readline'; // https://nodejs.org/api/readline.html

const students = [{
  age: 20,
  examScores: [],
  gender: 'male',
  name: 'Edu',
  icon: '♂'
},
{
  age: 18,
  examScores: [],
  gender: 'female',
  name: 'Bárbara',
  icon: '♀️'
},
{
  age: 22,
  examScores: [],
  gender: 'female',
  name: 'Paloma',
  icon: '♀️'
},
{
  age: 22,
  examScores: [],
  gender: 'female',
  name: 'Silvia',
  icon: '♀️'
}, {
  age: 45,
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
  age: 23,
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

const welcomeMsg = "\n*******  Bienvenido/a a CLASSROOM MANAGER, tu gestor de estudiantes  *******\nPor favor, escribe el número de la gestión que deseas realizar.\n"

const printOptions = {
1: 'Mostrar en formato de tabla todos los estudiantes.',
2: 'Mostrar la el número de estudiantes que hay en clase.',
3: 'Mostrar el nombre de todos los estudiantes.',
4: 'Eliminar el último estudiante de la clase.',
5: 'Eliminar un estudiante aleatoriamente.',
6: 'Mostrar los datos de todas las mujeres de la clase.',
7: 'Mostrar el número de hombres y mujeres que hay en la clase.',
8: 'Mostrar true o false si todos los estudiantes son mujeres.',
9: 'Mostrar los nombres de los estudiantes que tengan entre 20 y 25 años.',
10: 'Añadir un nuevo estudiante',
11: 'Mostrar el nombre de la persona más joven de la clase.',
12: 'Mostrar la edad media de todos los estudiantes.',
13: 'Mostrar la edad media de las mujeres de la clase.',
14: 'Añadir una nueva nota aleatoriamente por cada estudiante de la clase',
15: 'Ordenar alfabéticamente el array de estudiantes, según su nombre.',
}

// Dar bienvenida al usuario
function printWelcome() {
  console.log(welcomeMsg)

  // Mostrar opciones al usuario

  for (const key of Object.keys(printOptions)) {
    console.group()
    console.log(" | " + key + " | " + printOptions[key])
    console.groupEnd()
  }
}
printWelcome()

// Pedir al usuario que introduzca una opción por consola (input)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function selectAction() {
  const promise = new Promise((resolve, reject) => {
    // Preguntar al usuario qué opción desea elegir 
    rl.question('\nIntroduce el número: ', (num) => {
      rl.pause();
      if (isNaN(num) || num <=0 || num >15) {
        reject('Error. Necesito que introduzcas un número del 1 al 15') // si el usuario mete una letra, rechazar la promesa.
        selectAction()
      } else {
        let fromStringToNumber = parseInt(num)
        console.log("Opción elegida:", fromStringToNumber,"\n");
        resolve(fromStringToNumber); // si el usuario mete un número, resolvemos la promesa con ese número.
      }
    })
  })
  return promise
}
// consumidor
async function fecthSelectedAction() {
  try {
    const action = await selectAction()
    switch (action) {
      case 1:
        printStudentsTable(students); // 1. Mostrar en formato de tabla todos los estudiantes.
        break;
      case 2:
        getNumberOfStudents(students); // 2. Mostrar por consola la cantidad de estudiantes.
        break;
      case 3:
        getStudentName(students); // 3. Mostrar por consola todos los nombres de los estudiantes.
        break;
      case 4:
        removeLastStudent(students); // 4. Eliminar el último estudiante de la clase.
        break;
      case 5:
        removeRandomStudent(students); // 5. Eliminar un estudiante aleatoriamente.
        break;
      case 6:
        onlyFemaleStudents(students); // 6. Mostrar por consola todos los datos de las alumnas (gender: female).
        break;
      case 7:
        allGenderStudents(students); // 7. Mostrar por consola el número de alumnas y alumnos.
        break;
      case 8:
        getFemaleStudentsBool(students); // 8. Mostrar true o false por consola si todos los estudiantes son mujeres.
        break;
      case 9:
        getMid20s(students); // 9. Mostrar por consola los nombres de los esdiantes entre 20 y 25 años.
        break;
      case 10:
        addRandomStudent(students); // 10. Añadir un estudiante nuevo.
        break;
      case 11:
        getYoungestStudent(students); // 11. Mostrar por consola el nombre de la persona más joven.
        break;
      case 12:
        getAverageAge(students); // 12. Mostrar por consola la edad media de todos los estudiantes.
        break;
      case 13:
        getFemaleAverageAge(students); // 13. Mostrar por consola la edad media de las mujeres de la clase.
        break;
      case 14:
        addRandomScore(students); // 14. Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
        break;
      case 15:
        sortAlphabetically(students); // 15. Ordenar el array de alumnos alfabéticamente según su nombre.
        break;
    }
  }
  catch (error) {
    console.log('Has introducido un valor fuera de rango. Prueba otra vez')
  }
}
fecthSelectedAction()

//1. Mostrar tabla con todos los estudiantes

function printStudentsTable() {
  console.table(students);
}

//2. Mostrar el número todal de estudiantes
function getNumberOfStudents(students) {
  const studentsNumber = students.length;
  console.log("En total hay", studentsNumber, "estudiantes");
}

// 3. Mostrar el nombre de todos los estudiantes

function getStudentName(students) {
  console.log("Estos son los nombres de los estudiantes de la clase:\n")
  students.forEach(function(student) {
    if(student.gender == 'female'){
      console.group();
      console.log(`Nombre de la alumna: ${student.name} (${femaleIcon})`);
      console.groupEnd();
    }else{
      console.group();
      console.log(`Nombre del alumno: ${student.name} (${maleIcon})`);
      console.groupEnd();
    }
    });
}

// 4. Eliminar el último estudiante de la clase

function removeLastStudent(students) {
  students.pop();
  console.log(`\nÚltimo estudiante eliminado con éxito.\nEstos son los estudiantes actuales de la clase.\n`);
  console.table(students);
}

// 5. Eliminar un estudiante de la clase aleatoriamente

function removeRandomStudent(students) {
  console.table(students);
  let deletedStudent = students.splice(Math.floor(Math.random() * students.length), 1);
  console.table(deletedStudent);
  console.log(`\nEstudiante aleatorio ${deletedStudent[0].name} eliminado con éxito.\nEstos son los estudiantes actuales de la clase.`);
  console.table(students);
}

// 6. Mostrar por consola todos los datos de las alumnas (gender: 'female')

function onlyFemaleStudents(students) {
  if(femaleStudents.length >= 1){
    console.log("Estas son las alumnas de la clase")
    console.table(femaleStudents);
  }else{
    console.log("No hay ninguna alumna en esta clase")
  }
}

// 7. Mostrar por consola el número de chicos y chicas que hay en la clase.

function allGenderStudents(students) {
  const numberOfFemaleStudents = femaleStudents.length;
  const numberOfMaleStudents = maleStudents.length;
  const numberOfAllGenderStudents = numberOfMaleStudents + numberOfFemaleStudents;

  if (numberOfAllGenderStudents > 1) {
    console.group()
    console.log(`En esta clase hay ${numberOfAllGenderStudents} estudiantes.\n${numberOfMaleStudents} son hombres ${maleIcon} y ${numberOfFemaleStudents} mujeres ${femaleIcon}.`)
  } else {
    console.log(`En esta clase no hay estudiantes.`)
  }
  console.groupEnd()
}

// 8. Mostrar true o false por consola si todos los estudiantes de la clase son mujeres.

function getFemaleStudentsBool(students) {
  console.log(students.every(gender => gender === 'female'))
}

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
// 10. Añadir un alumno nuevo con los siguientes datos:
//- nombre aleatorio.
//- edad aleatoria entre 20 y 50 años.
//- género aleatorio.
//- listado de calificaciones vacío.

function addRandomStudent(students) {
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
    icon: getIcon,
  })
  console.log("Estudiante aleatorio añadido con éxito.")
  console.table(students)
}

// 11. Mostrar por consola el nombre de la persona más joven de la clase

function getYoungestStudent(students) {
  const youngestAge = Math.min(...students.map(item => item.age));
  let youngestStudent = students.filter(student => student.age == youngestAge);
  let youngestStudentName = youngestStudent.map(function (student) {
    return student.name
  });
  console.log(`El más joven de la clase es ${youngestStudentName} y tiene ${youngestAge} años`);
}

// 12. Calcular la media de edad de todos los estudiantes

function getAverageAge(students) {
  const getAverageAge = students.reduce((a, b) => a + b.age, 0) / students.length;
  let averageAge = Math.round(getAverageAge)
  console.log(`La media de edad de la clase es ${averageAge} años`);
}

// 13. Mostrar por consola la edad media de las chicas de la clase

function getFemaleAverageAge(femaleStudents) {
  console.table(femaleStudents);
  let femaleAgerageAge = getAverageAge(femaleStudents).toFixed(2)
  console.log(`La media de edad de las mujeres de la clase es ${femaleAgerageAge} años`)
}

// 14. Añadir nueva nota a los alumnos. Por cada alumno de la clase, calcular una nota random (de 0-10) y añadirla a su listado de notas

function addRandomScore() {
  const min = 0;
  const max = 10;
  students.forEach(function (student) {
    let randomScore = Math.floor(Math.random() * (max - min) + min);
    student.examScores.push([randomScore]);
    console.log(`Nueva nota aleatoria añadida para ${student.name}`);
    console.log("Base de datos de estudiantes actualizada");
    console.table(students);
  })
}

// 15. Ordenar el array de alumnos alfabéticamente, según su nombre.

function sortAlphabetically() {
  console.log("Lista de estudiantes ordenada alfabéticamente");
  console.table(students.sort((a, b) => a.name.localeCompare(b.name)));
}