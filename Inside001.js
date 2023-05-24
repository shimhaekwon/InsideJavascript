//  자바스크립트 객체 생성 방법

//------------------------------------------------------------------------------//
// 1 객체 리터럴 방식 ( Object Literal )
const person = {
    name:'John',
    age:30,
    email:'john@test.com'
}

//------------------------------------------------------------------------------//
// 2 생성자 함수 방식 (Constructor Function)
function PersonFunction(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
}

const personFunc = new PersonFunction('John',30,'john@test.com');

//------------------------------------------------------------------------------//
// 3 클래스 방식 (Class)
class PersonClass {
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const personClass = new PersonClass('John',30,'john@test.com');

//------------------------------------------------------------------------------//
// Object.create()

const personObject = Object.create({},{
    name:{value:'John', title :"this name"},
    age:{value:30, title :"this age"},
    email:{value:'john@test.com', title :"this email"}
});

// const personObjectWrong = Object.create({},{
//     name:'John',
//     age:30,
//     email:'john@test.com'
// });     // wrong usage -- value must .....


//------------------------------------------------------------------------------//
// Object.create()
const personObjectPrototype = {
    name:'John',
    age:30,
    email:'john@test.com',
    myPresentation:function(){
        console.log("personObjectPrototype:", this.name , ' is ', this.age, ' years old.');
    }
};

const personObjectMore = Object.create(personObjectPrototype);
personObjectMore.myPresentation();


const personObjectPrototype2 = {
    name:{value:'John', title :"this name"},
    age:{value:30, title :"this age"},
    email:{value:'john@test.com', title :"this email"},
    myPresentation:function(){
        console.log("personObjectPrototype2:", this.name.value , ' is ', this.age.value, ' years old.');
    }
};

const personObjectMore2 = Object.create(personObjectPrototype2);
personObjectMore2.myPresentation();

