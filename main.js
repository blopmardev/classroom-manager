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
  
// Mostrar tabla con todos los estudiantes
  console.table(students);

// Mostrar el número total de estudiantes

function getNumberOfStudents(students){
    const studentsNumber = students.length;
    return studentsNumber;
  }
  console.log("En total hay", getNumberOfStudents(students), "estudiantes");

// Mostrar el nombre de todos los estudiantes

function getStudentName(student) {
    switch(student.gender){
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
  
  students.forEach((name, gender) => getStudentName(name, gender));