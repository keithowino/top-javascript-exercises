const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    }
]

const findTheOldest = (subjects) => {
    const subjectsAges = [];
    const time = new Date();
    for(let i = 0; i < subjects.length; i++){
        if(!subjects[i].hasOwnProperty("yearOfDeath")){
            subjects[i].yearOfDeath = time.getFullYear();
        };
        let subjectAge = subjects[i].yearOfDeath - subjects[i].yearOfBirth;
        subjectsAges.push(subjectAge);
    };
    return subjects[subjectsAges.indexOf(Math.max.apply(Math, subjectsAges))];
};

console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
