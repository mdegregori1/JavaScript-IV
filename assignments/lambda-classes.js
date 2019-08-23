// CODE here for your Lambda Classes!

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

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.PreviousBackground = attributes.PreviousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listSubjects(){
        return (`${this.favSubjects}`);
    }
    PRAssignment(subject){
        return (`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        return (`${this.name} has begun sprint challenge on  ${subject}`)
    }
}

//Project Manager class comes from Instructors class 


class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        return (`${this.name} announces to ${channel} @channel standby times!`)
    }
    debugsCode(student,subject){
        return (`${this.name} debugs ${student.name}'s code on ${subject}`)
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

const studentOne = new Student ({
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

const studentTwo = new Student ({
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
console.log(instructorOne.grade(studentOne,'html'));
console.log(instructorOne.demo('Javascript'));
console.log(instructorTwo.demo('PHP'));
console.log(instructorTwo.grade(studentTwo,'JS'));
console.log(PMOne.standUp('Web23'));
console.log(PMTwo.standUp('WebPT4'));
console.log(PMOne.debugsCode(studentOne,PMOne.favLanguage));
console.log(PMTwo.debugsCode(studentTwo,PMTwo.favLanguage));
console.log(studentOne.listSubjects());
console.log(studentTwo.listSubjects());
console.log(studentOne.sprintChallenge('JS'));
console.log(studentTwo.sprintChallenge('CSS'));
console.log(studentOne.PRAssignment('Web Dev'));
console.log(studentTwo.PRAssignment('PHP'));


