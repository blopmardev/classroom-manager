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

let femaleStudents = students.filter(student => student.gender == "female");
let maleStudents = students.filter(student => student.gender == "male");

const maleIcon = '♂';
const femaleIcon = '♀️';

const availableMaleNames = ['Pepe', 'Juan', 'Victor', 'Leo', 'Francisco', 'Carlos'];
const availableFemaleNames = ['Cecilia', 'Ana', 'Luisa', 'Silvia', 'Isabel', 'Virginia'];
const availableGenders = ['male', 'female'];

// Mostrar tabla con todos los estudiantes
console.table(students);

// Mostrar el número total de estudiantes

function getNumberOfStudents(students) {
    const studentsNumber = students.length;
    return studentsNumber;
}
console.log("En total hay", getNumberOfStudents(students), "estudiantes");
console.group();

// Mostrar el nombre de todos los estudiantes

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

students.forEach((name, gender) => getStudentName(name, gender));
console.groupEnd()

// Eliminar el último estudiante de la clase

students.pop();
console.table(students);

//Eliminar un estudiante de la clase aleatoriamente

const getRandomStudent = students[Math.floor(Math.random() * students.length)];
console.table([getRandomStudent]);

const discardRandomStudent = students.filter(student => student !== getRandomStudent);
console.table(discardRandomStudent);

const randomStudentIndex = students.indexOf(getRandomStudent); // obtenemos el índice
console.log("Esto es el índice", randomStudentIndex, getRandomStudent.name);
students.splice(randomStudentIndex, 1); // 1 es la cantidad de elementos (estudiantes) a eliminar

console.table(students);

// Mostrar por consola todos los datos de las alumnas (gender: 'female')

function onlyFemaleStudents(students) {
    console.table(femaleStudents);
}
onlyFemaleStudents(students)

// Mostrar por consola el número de hombres y mujeres que hay en la clase.

function allGenderStudents(students) {
    const numberOfFemaleStudents = femaleStudents.length;
    const numberOfMaleStudents = maleStudents.length;
    const numberOfAllGenderStudents = numberOfMaleStudents + numberOfFemaleStudents;

    /*if (numberOfFemaleStudents > 1 || numberOfFemaleStudents == 0) {
        console.log(`En esta clase hay ${numberOfFemaleStudents} mujeres ${femaleIcon}.`)
    } else {
        console.log(`En esta clase hay ${numberOfFemaleStudents} mujer ${femaleIcon}.`)
    }

    if (numberOfMaleStudents > 1 || numberOfMaleStudents == 0) {
        console.log(`En esta clase hay ${numberOfMaleStudents} hombres ${maleIcon}.`)
    } else {
        console.log(`En esta clase hay ${numberOfMaleStudents} hombre ${femaleIcon}.`)
    }*/

    console.log(`En esta clase hay ${numberOfAllGenderStudents} estudiantes.`)

    if (numberOfAllGenderStudents > 1) {
        console.group()
        console.log(`${numberOfMaleStudents} son hombres ${maleIcon} y ${numberOfFemaleStudents} mujeres ${femaleIcon}.`)
    } else {
        console.log(`En esta clase no hay estudiantes.`)
    }
}
allGenderStudents(students);

// Mostrar true o false por consola si todos los estudiantes de la clase son mujeres.

function getAllFemaleStudents(students) {
    //let allFemaleStudents = students.filter(student => student.gender == "female");
    if (femaleStudents.length == students.length) {
        femaleStudents = true
        console.log(femaleStudents)
        return true;
    } else {
        femaleStudents = false
        console.log(femaleStudents)
        return false;
    }
}
getAllFemaleStudents(students)

// Mostrar por consola los nombres de los estudiantes que tengan entre 20 y 25 años

function getMid20s(students) {
    let isMid20s = students.filter(student => student.age >= 20 && student.age <= 25);
    let studentsIn20s = isMid20s.map(function (student) {
        return student.name;
    });
    console.table(isMid20s)
    console.log("Estudiantes entre 20-25 años:", studentsIn20s)
}
getMid20s(students)

// Mostrar por consola el nombre de la persona más joven de la clase

function getYoungestStudent(students) {
    const youngestAge = Math.min(...students.map(item => item.age));
    let youngestStudent = students.filter(student => student.age == youngestAge);
    let youngestStudentName = youngestStudent.map(function (student) {
        return student.name
    });
    console.log(`El más joven de la clase es ${youngestStudentName} y tiene ${youngestAge} años`);
}
getYoungestStudent(students)

// Calcular la media de edad de todos los estudiantes
function getAverageAge(students) {
    return students.reduce((prev, student) => prev + student.age, 0) / students.length;
}
console.log(`La media de edad de la clase es de ${getAverageAge(students).toFixed(2)} años.`);