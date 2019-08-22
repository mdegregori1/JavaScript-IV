// CODE here for your Lambda Classes
// Instructors and students being siblings
// PM's are children of the instructor 


// Person === main class 

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return (`Hello my name is ${this.name}, and I am from ${this.location}`)
    }
}

//Instructor class comes from Person class 

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        return (`Today we are learning about ${subject}`)
    }
    grade(student,subject){
        return (`${student.name} receives a perfect score on ${subject}`)
    }
}

// Student class comes from Person class 

class Students extends Person {
    constructor(attributes){
        super(attributes);
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.PreviousBackground = attributes.PreviousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listSubjects(subject){
        return (`Today we are learning about ${subject}`)
    }
    PRAssignment(subject){
        return (`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        return (`{student.name} has begun sprint challenge on  ${subject}`)
    }
}

//Project Manager class comes from Instructors class 


class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(name,channel){
        return (`${name} announces to ${channel} @channel standby times!`)
    }
    debugsCode(){
        return (`${name} debugs ${student.name}'s code on ${subject}`)
    }

}


//create 2-3 objects for each class 

// Person
const personOne = new Person ({
    name: 'Constance',
    age: 42,
    location: 'Jacksonville'
})

const personTwo = new Person ({
    name: 'Tom',
    age: 26,
    location: 'Baton Rouge'
})
// student 
const studentOne = new Students ({
    name: 'Mauricio',
    age: 23,
    location: 'Austin',
    PreviousBackground: 'Finance',
    className: 'JS III',
    favSubjects:[
        'Html', 
        'CSS', 
        'JavaScript'
    ]
})

const studentTwo = new Students ({
    name: 'Jordan',
    age: 32,
    location: 'New York',
    PreviousBackground: 'Sales',
    className: 'JS I',
    favSubjects: [
        'Html', 
        'CSS', 
        'JavaScript'
    ]
})

// instructors 

const instructorOne = new Instructor ({
    name: 'Horacio',
    age: 18,
    location: 'Juarez',
    specialty:'React',
    favLanguage: 'Python',
    catchPhrase: 'Thread'
})

const instructorTwo = new Instructor ({
    name: 'Eugene',
    age: 31,
    location: 'Ontario',
    specialty: 'React Native',
    favLanguage:'Javascript',
    catchPhrase: 'Give me the thumbs when youre recording'
})

// PM 

const PMOne = new ProjectManager ({
    name: 'Joseph',
    age: 31,
    location: 'Ontario',
    specialty: 'node.js',
    favLanguage: 'HTML',
    catchPhrase: 'Create a Pull Request',
    favInstructor: 'Eugene',
    gradClassName: 'CS2'
})

const PMTwo = new ProjectManager ({
    name: 'Janice',
    age: 31,
    location: 'Ontario',
    specialty: 'mongo',
    favLanguage: 'PHP',
    catchPhrase: 'Lambda is the best',
    favInstructor: 'Eugene',
    gradClassName: 'CS3'
})

console.log(personOne.speak());
console.log(personTwo.speak());
console.log(studentOne.listSubjects());
console.log(studentTwo.Students());
console.log(instructorOne.Instructor());
console.log(instructorTwo.Instructor());
console.log(PMOne.ProjectManager());
console.log(PMTwo.ProjectManager());





