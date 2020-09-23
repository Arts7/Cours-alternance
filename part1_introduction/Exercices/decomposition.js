// let [a, b, c] = [1, 2, 4];

// [a, b, c] = [b, c, a];

// console.log(a,b,c);

// let student = {  
//     name : "Alan", 
//     notes : [ 10, 16, 17], 
//     average : null 
// }

// const [name, notes, average] = [student.name, student.notes, student.average];
// console.log(name, notes, average);

const students = [
    {
      name: "Alan",
      family: {
        mother: "Isa",
        father: "Philippe",
        sister: "Sylvie"
      },
      age: 35
    },
    {
      name: "Bernard",
       family: {
        mother: "Particia",
        father: "Cécile",
        sister: "Annie"
      },
      age: 55
    }
];

const studsyster = {
    setNameAndSyst: function setNameAndSyst() {
        for (const element of students) {
            console.log('Nom de l\'étudiant: ', element.name,'\n Nom de sa soeur: ', element.family.syster);
        }    
    }
}
studsyster.setNameAndSyst();

for (const {name, family: {sister}} of students) {
    console.log('Nom de l\'étudiant: ' + name + '\n Nom de sa soeur: ' + sister);
}