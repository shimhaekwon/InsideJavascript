//////////////////////////////////////////////////////////////////////////////////////////////
///// common fuction
const showDateTime = function(){
    
    var currentTime = new Date();

    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1; // 월은 0부터 시작하므로 +1
    var day = currentTime.getDate();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var millisecond = currentTime.getMilliseconds();

    console.log('=========================================================================================================');
    console.log('현재 시간:', year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second + '.' + millisecond);
};
///// common fuction
//////////////////////////////////////////////////////////////////////////////////////////////
// javascript is prototype based object oriented programming.
//////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
console.log("5.4.2.1 특정함수에 사용자가 정의한 객체의 메서드 연결하기");
console.log("예제 5-9");
//////////////////////////////////////////////////////////////////////////////////////////////
function HelloFunc(func){
    this.greeting = "hello";
    console.log("HelloFunc(func) - this.greeting=",this.greeting);
    if(!(this instanceof arguments.callee)){
        return HelloFunc(func);
    }    
}

HelloFunc.prototype.testMethod = function(){
    console.log("HelloFunc.prototype.testMethod()=",this.greeting);
}

HelloFunc.prototype.call = function(func){
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting){
    console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();

console.log('-----------------------------');

function saySomething(obj, methodName, name){
    return (function(greeting){
        return obj[methodName](greeting,name)
    });
}

function newObj(obj, name){
    obj.func = saySomething(this, "who", name);
    return obj;
}

newObj.prototype.who = function(greeting, name){
    console.log(greeting + " " + (name || "everyone"));
}

var obj1 = new newObj(objHello, "zzoon");
obj1.call();
//////////////////////////////////////////////////////////////////////////////////////////////


// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("sample 5-8");
// //////////////////////////////////////////////////////////////////////////////////////////////
// function outerFunc(arg1, arg2){
//     var local = 8;
//     console.log("outerFunc() - local=",local);
//     console.log("outerFunc() - arg1=",arg1,", arg2=",arg2);
//     function innerFunc(innerArg){
//         console.log("innerFunc() - local=",local);
//         console.log("innerFunc() - innerArg=",innerArg);
//         console.log( (arg1+arg2) / (innerArg + local) );
//     };
//     return innerFunc;
// };
// var exam1 = outerFunc(2,4);
// console.log('-----------------------------');
// exam1(0);
// //////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("5.4 closure");
// //////////////////////////////////////////////////////////////////////////////////////////////
// function outF(){
//     var x = 10;
//     var inF = function(){console.log("outF().inF().x=",x);}
//     console.log("outF().inF=",inF)
//     return inF;
// }
// var inner = outF();
// inner();
// //////////////////////////////////////////////////////////////////////////////////////////////



/*
chat gpt 가 아래 두 함수에 대해 설명함.
두 코드 샘플은 val이라는 변수를 사용하는 방식에서 차이가 있습니다.

Sample 1에서는 val 변수를 함수 내에서 선언하지 않고 외부에서 선언한 후 사용합니다. 따라서 함수 내에서 val을 참조할 때, 외부에서 정의한 값인 1을 참조하게 됩니다. 출력 결과는 "aa().val= 1"이 됩니다.

반면, Sample 2에서는 val 변수를 함수 내에서 선언하고 값을 2로 할당합니다. 이 경우 함수 내에서 선언한 val 변수는 외부에서 정의한 val 변수와는 별개의 변수가 됩니다. 따라서 함수 내에서 val을 참조할 때, 함수 내에서 정의한 값인 2를 참조하게 됩니다. 출력 결과는 "aa().val= undefined"이 됩니다. 이는 함수 내에서 console.log 문 이후에 var val = 2; 선언문이 있지만, 초기화되기 전에 console.log가 실행되었기 때문입니다.

따라서 Sample 1에서는 외부에서 선언한 val 변수를 참조하고, Sample 2에서는 함수 내에서 선언한 val 변수를 참조한다는 차이가 있습니다.
*/
//////////////////////////////////////////////////////////////////////////////////////////////
// const val = 1;
// const aa = function(){
//     this.name = 'aa';
//     console.log("aa().val=",val);
// };
// aa();
// //////////////////////////////////////////////////////////////////////////////////////////////
// const val = 1;
// const aa = function(){
//     this.name = 'aa';
//     console.log("aa().val=",val);
//     var val = 2;
// };
// aa();
//////////////////////////////////////////////////////////////////////////////////////////////


// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("자바스크립트 - 호이스팅 : var 선언+할당 문은 스코프 내 최상위에서 선언하고, 할당은 뒤에 함.");
// //////////////////////////////////////////////////////////////////////////////////////////////
// foo();
// bar();

// var foo = function(){
//     console.log("foo and x = ", x);
// }

// function bar(){
//     console.log("bar and x = ", x);    
// }

// var x = 1;

/*
after hoisting

var foo;

function bar() {
    console.log("foo and x = ", x);
}

var x;

foo(); // TypeError
bar();

foo = function(){
    console.log("foo and x = ", x);
}

x = 1;
*/
//////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
/*
실행 컨텍스트와 클로져
실행 컨텍스트, 변수의 유효범위, 클로져.
1. 실행 컨택스트 : Execution context : 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념. 실행 가능한 자바스크립트 코드 블록이 실행되는 환경
2. 활성객체와 변수객체 : Activation object / Variable object
3. 스코프 체인 : scope chain
4. 클로져 : closure
*/
//////////////////////////////////////////////////////////////////////////////////////////////
// const val = 1;
// const aa = function(){
//     this.name = 'aa';
    
//     console.log(this);
//     console.log("aa().this.val=",this.val);
// };
// aa();

// const bb = function(){
//     //console.log(this);
//     console.log("bb().this.val=",this.val);
//     console.log("bb().val=",val);
//     this.name = 'bb';
//     this.val = 2;
//     var val = 2;
//     console.log("bb().this.val 2nd=",this.val);
//     console.log("bb().val 2nd=",val);
// };
// bb();

// const cc = function(){
//     this.name = 'cc';
//     this.val = 3;
//     var val = 3;
//     console.log(this);
//     console.log("cc().val=",val);
//     console.log("cc().this.val=",this.val);
// };
// cc();
// //////////////////////////////////////////////////////////////////////////////////////////////
// const val = 1;
// const aa = function(){
//     console.log("aa().val=",val);
// };
// aa();

// const bb = function(){
//     console.log("bb().val=",val);
//     var val = 2;
//     console.log("bb().val 2nd=",val);
// };
// bb();

// const cc = function(){
//     var val = 2;
//     console.log("cc().val=",val);
// };
// cc();
// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("5.3.2 함수를 호출한 경우 생성되는 실행 컨텍스트의 스코프 체인");
// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("example 5-5");
// //////////////////////////////////////////////////////////////////////////////////////////////
// var value = 1;

// const printFunc = function(){
//     console.log("printFunc() value=",value);
//     // printFunc() value= undefined

//     var value = 2;
//     console.log("printFunc().this=",this);
//     console.dir(this);

//     const printValue = function(){
//         console.log("printValue() value=",value);
//         // printValue() value= 2

//         console.log("printFunc().printValue().this=",this);
//         console.dir(this);
//         // printValue() value= 2

//         return value;
//     };
//     console.log("printValue()=",printValue());
//     // printValue()= 2
// }
// printFunc();
// console.log("------------------------------------------")

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("example 5-6");
// //////////////////////////////////////////////////////////////////////////////////////////////
// var value2 = 1;
// console.log("window value2=",value2);

// const printValue2 = function(){
//     console.log("printValue2() value2=",value2)
    
//     return value2;
// }

// const printFunc2 = function(func){
//     var value2 = 2;
//     console.log("printFunc2() value2=",value2);
//     console.log("printFunc2() func()=",func());
// }

// printFunc2(printValue2);

// ///// 실행결과
// /*
// window value2= 1
// printFunc2() value2= 2
// printValue2() value2= 1
// PrintFunc2() func()= 1
// */
// //////////////////////////////////////////////////////////////////////////////////////////////



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("459 객체의 프로퍼티 읽기나 메서드를 실행할 때만 프로토타입 체이닝이 동작한다.");
// //////////////////////////////////////////////////////////////////////////////////////////////
// function Person(name){
//     if(!(this instanceof arguments.callee)){
//         return Person(name);
//     }
//     this.name = name;
// };

// Person.prototype.country = 'Korea';

// var foo = new Person('foo');
// var bar = new Person('bar');

// console.log(foo.country);
// console.log(bar.country);

// foo.country = 'USA';

// console.log(foo.country);
// console.log(bar.country);

// //////////////////////////////////////////////////////////////////////////////////////////////



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("default prototype 은 다른 객체로 변경이 가능하다.");
// //////////////////////////////////////////////////////////////////////////////////////////////
// function Person(name){
//     if(!(this instanceof arguments.callee)){
//         return Person(name);
//     }
//     this.name = name;
// }
// console.log(Person.prototype.constructor);

// var foo = new Person('foo');
// console.log(foo.country);

// Person.prototype = {
//     country : 'korea'
// };
// console.log(Person.prototype.constructor);

// var bar = new Person('bar');
// console.log(foo.country);
// console.log(bar.country);
// console.log(foo.constructor);
// console.log(bar.constructor);
// //////////////////////////////////////////////////////////////////////////////////////////////



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("457 프로토타입 메서드와 this 바인딩.")
// //////////////////////////////////////////////////////////////////////////////////////////////
// function Person(name){
//     this.name = name;
// }

// Person.prototype.getName = function(){
//     return this.name;
// }

// var foo = new Person('foo');

// console.log(foo.getName());

// Person.prototype.name = 'person';

// console.log(Person.prototype.getName());
// console.log(foo.getName());
// //////////////////////////////////////////////////////////////////////////////////////////////



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("456 프로토타입도 자바스크립트 객체.");
// //////////////////////////////////////////////////////////////////////////////////////////////
// try {

//     function Person(name){
//         this.name = name;
//     }
    
//     var foo = new Person('foo');
  
//     foo.sayHello();

// } catch(error){
//     console.log(error);
        
//     Person.prototype.sayHello = function(){
//         console.log('Hello! ' +  this.name );
//     }

//     foo.sayHello();
// }

//////////////////////////////////////////////////////////////////////////////////////////////



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("452 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝");
// //////////////////////////////////////////////////////////////////////////////////////////////
// var myObject = {
//     name : 'foo',
//     sayName : function(){
//         console.log('My name is ' + this.name);
//     }
// }

// console.dir(myObject);
// myObject.sayName();
// console.log(myObject.hasOwnProperty('name'));
// console.log(myObject.hasOwnProperty('nickname'));
// myObject.sayNickName();
// //////////////////////////////////////////////////////////////////////////////////////////////



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('sample 437 prototype chaining');
// //////////////////////////////////////////////////////////////////////////////////////////////
// function Person(name){
//     if(!(this instanceof arguments.callee)){
//         return Person(name);
//     }
//     this.name = name;
// }

// var foo = new Person('foo');
// console.dir(Person);
// console.dir(foo);
// //////////////////////////////////////////////////////////////////////////////////////////////



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('4432 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다');
// // boolean, number, string 등을 return 하면 리턴값을 무시하고 this로 바인딩된 객체가 리턴됨.
// //////////////////////////////////////////////////////////////////////////////////////////////
// const Person = function(name, age, gender){
//     if(!(this instanceof arguments.callee)){
//         return new Person(name, age, gender);
//     }
//     this.name = name
//     this.age = age;
//     this.gender = gender;
//     //return {name:'bar', age:20, gender:'female'};
//     return 100;
// };
// var foo = new Person('foo', 30, 'male');
// console.dir(foo);
// //////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('443 함수 리턴');
// //////////////////////////////////////////////////////////////////////////////////////////////
// var noReturn = function (){
//     console.log('This function has no return statement.');
// };

// var result = noReturn();    
// console.log(result);        // undefined
// //////////////////////////////////////////////////////////////////////////////////////////////


// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log( 'apply 를 사용하여 배열 method를 적용하기');
// function myFuction(){
//     console.log('1st log:');
//     console.dir(arguments);

//     // arguments.shift();      /// 에러

//     var args = Array.prototype.slice.apply(arguments);
//     console.log('2nd log:');
//     console.dir(args);
// }

// myFuction(1,2,3);

// // slice() method 확인
// var arrA = [1,2,3,4];
// console.log('[1,2,3,4]:',arrA);
// var arrB = arrA.slice(0);
// console.log('[1,2,3,4].slice(0):',arrB);
// var arrC = arrA.slice();
// console.log('[1,2,3,4].slice():',arrC);
// var arrD = arrA.slice(1);
// console.log('[1,2,3,4].slice(1):',arrD);
// var arrE = arrA.slice(1,2);
// console.log('[1,2,3,4].slice(1,2):',arrE);

// //////////////////////////////////////////////////////////////////////////////////////////////



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('call appy 메서드를 사용한 명시적인 binding');
// // Function.prototype 객체의 메서드.
// //////////////////////////////////////////////////////////////////////////////////////////////
// // function.apply(thisArg, argArry);//
// function Person(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// var foo = {};
// console.log('foo 0:',foo);
// Person.apply(foo, ['foo',30,'male']);   // apply : arguments를 배열 형태로
// console.log('foo 1:',foo);
// Person.call(foo, 'poo', 25, 'female');  // call : arguments를 각각 ....
// console.log('foo 2:',foo);
// //////////////////////////////////////////////////////////////////////////////////////////////


// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('sample 429 객체 생성 두 가지 방법');
// //////////////////////////////////////////////////////////////////////////////////////////////
// const Person = function(name, age, gender, position){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;    
// }

// var bar = new Person('bar', 33, 'female');
// console.log('bar=',bar);

// var baz = new Person('baz', 25, 'male');
// console.log('baz=',baz);

// var foo = {
//     name:'foo',
//     age:31,
//     gender:'male'
// };
// console.log('foo=',foo);

// var ant = Person('ant', 25, 'male');
// console.log('ant=',ant);    // undefined
// console.log('window.name=',window.name);   // ant
// console.log('window.age=',window.age);    // 25
// console.log('window.gender=',window.gender); // male   
// // new 없이 일반 함수 형태로 호출하는 경우 this는 함수 호출이므로 전역객체인 window 객체로 바인딩됨.

// // new 없이 일반 함수 형태로 호출해도 함수로 바인딩되게 하려면??

// const A = function(arg1, arg2){
//     if(!(this instanceof A)){
//         return new A(arg1, arg2);
//     }
//     this.value1 = arg1 ? arg1 : 0;
//     this.value2 = arg2 ? arg2 : 0;
// };
// var a = new A(100,200);
// var b = A(300,400);
// console.log('a=',a);
// console.log('b=',b);

// const B = function(arg1, arg2){
//     if(!(this instanceof arguments.callee)){
//         return new B(arg1, arg2);
//     }
//     this.value1 = arg1 ? arg1 : 0;
//     this.value2 = arg2 ? arg2 : 0;
// };
// var aa = new B(1,2);
// console.log('aa=',aa);


// //////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log("4423 생성자 함수");
// //////////////////////////////////////////////////////////////////////////////////////////////
// const Person = function(name){
//     this.name = name;    
// }

// var foo = new Person("foo~~~~");
// console.log('foo.name=',foo.name);


// const Animal = function(name,count){
//     this.name = name;
//     this.count = count;
//     console.log('Animal.count=',this.count)
//     var countAdd = function(){
//         console.log('Animal.countAdd=',this.count)
//         this.count ++;
//         console.log('Animal.countAdd++ =',this.count)
//         var countAdd2 = function(){
//             console.log('Animal.countAdd2=',this.count)
//             this.count ++;
//             console.log('Animal.countAdd2++ =',this.count)
//         }
//         countAdd2();
//     }
//     countAdd();
// }

// var bear = new Animal('bear', 1);
// console.log(bear);
// //////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('442 호출 패턴과 this 바인딩');
// //////////////////////////////////////////////////////////////////////////////////////////////

// ////// javascript -- 내부 함수 호출 패턴을 정의해놓지 않는다.
// //////////////////////////////////////////////////////////////////////////////////////////////
// var value = 100;

// var myObject = {
//     value:1,
//     func1:function(){
//         this.value += 1;
//         showDateTime();
//         console.log('myObject-func1() called. this : ', this);
//         console.log('myObject-func1() called. this.value : ', this.value);

//         func2 = function(){
//             this.value += 1;
//             showDateTime();
//             console.log('myObject-func2() called. this : ', this);
//             console.log('myObject-func2() called. this.value : ', this.value);

//             func3 = function(){
//                 this.value += 1;
//                 showDateTime();
//                 console.log('myObject-func3() called. this : ', this);
//                 console.log('myObject-func3() called. this.value : ', this.value);
    
//             }
//             func3();
//         }
//         func2();
//     }
// };
// myObject.func1();
// /*
// 2,3,4 가 예상되었는데
// 2, 101, 102 가 리턴됨.

// 결국 func2(), func3() 가 보는 value 는 
//   myObject.value:1 이 아니라    var value=100; 
//   >> window.value 임.
// */
// //////////////////////////////////////////////////////////////////////////////////////////////
// //// >>>>>  2, 3, 4 가 리턴되게 하려면??
// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('=========================================================================================================');
// console.log("it's over myObject()");
// console.log('=========================================================================================================');
// var value2 = 200;
// var myObject2 ={
//     value2:1,
//     func1 : function(){
//         var that = this;
//         showDateTime();
//         console.log('myObject2-func1() called. this : ', this);
//         console.log('myObject2-func2() called. that : ', that);

//         this.value2 += 1;
//         console.log('myObject2-func1() called. this.value2 : ', this.value2);

//         var func2 = function(){
//             showDateTime();
//             console.log('myObject2-func2() called. this : ', this);
//             console.log('myObject2-func2() called. that : ', that);
//             that.value2 += 1;
//             console.log('myObject2-func2() called. this.value2 : ', this.value2);
//             console.log('myObject2-func2() called. that.value2 : ', that.value2);

//             var func3 = function(){ 
//                 showDateTime();
//                 console.log('myObject2-func3() called. this : ', this);
//                 console.log('myObject2-func3() called. that : ', that);                   
//                 that.value2 += 1;
//                 console.log('myObject2-func3() called. this.value2 : ', this.value2);
//                 console.log('myObject2-func3() called. that.value2 : ', that.value2);
//             }
//             func3();
//         }
//         func2();
//     }
// }
// myObject2.func1();
// //////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////
// const myObject = {
//     name : 'foo',
//     sayName: function(){
//         console.log('myObjec[sayName] - ',this.name);
//     }
// };

// const otherObject = {
//     name : 'bar'
// }

// otherObject.sayName = myObject.sayName;
// // myObject의 sayName 을 wjsekfgka.

// myObject.sayName();
// otherObject.sayName();
// //////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('441 arguments 객체');
// //////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////
// function sum(){
//     var result = 0;
//     for(var i=0; i < arguments.length; i++){
//         if(i!== arguments.length - 1){
//             console.log(arguments[i], '+');    
//         } else {
//             console.log(arguments[i], '=');    
//         }       
//         result += arguments[i]
//     }
//     return result;
// }

// console.log('sum(1,2,3)=',sum(1,2,3));
// console.log('sum(1,2,3,4,5,6)=',sum(1,2,3,4,5,6));

// //////////////////////////////////////////////////////////////////////////////////////////////
// function func(arg1, arg2){
//     console.log(arg1, arg2);
// }

// func();
// func(1);
// func(1,2);
// func(1,2,3);



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('433 inner function - 내부 함수 or closer');
// //////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////
// var self = function(){
//     console.log('self().a');
//     return function(){
//         console.log('return function()');
//     };
// };

// self2 = self(); // self().a
// self2();        // return function()
// self();         // self().a


//////////////////////////////////////////////////////////////////////////////////////////////
// function parent(){
//     var a = 100;

//     var child = function(){
//         console.log(a);
//     };

//     return child;
// }

// var inner = parent();
// inner();

//////////////////////////////////////////////////////////////////////////////////////////////
// function parent(){
//     var a = 100;
//     var b = 200;

//     // 내부 함수
//     function child(){
//         var b = 400;
//         console.log('a=',a);
//         console.log('b=',b);
//     }
//     child();
//     return child();
// }

// parent();   // 100, 400
// child();    // error  >> InsideJavaScript.js:43 Uncaught ReferenceError: child is not defined at InsideJavaScript.js:43:1
//////////////////////////////////////////////////////////////////////////////////////////////


// ///// jquery 
// $(document).ready(function() {
//     // 문서가 로드되면 실행됩니다.
//     // $('button').click(function() {
//     //   // 버튼이 클릭되면 실행됩니다.
//     //   alert('Hello World!');
//     // });
// });
///// >> javascript

// document.addEventListener("DOMContentLoaded", function() {
//     // 문서가 로드되었을 때 실행되는 코드
//     var button = document.getElementById('button');
//     button.addEventListener('click', function() {
//       // 버튼이 클릭되었을 때 실행되는 코드
//       alert('Hello World!');
//     });
//   });

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('432 immediate function - 즉시 실행 함수');
// //////////////////////////////////////////////////////////////////////////////////////////////
// // (function (name){
// //     console.log('This is the immediate function -> ' + name);
// // })('foo');


// (function() {
//     // IIFE 시작
//     var name = "John";
  
//     function sayHello() {
//       console.log("Hello, " + name + "!");
//     }
  
//     sayHello();
  
//   })(); // IIFE 실행




// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('431 callback function');
// //////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////
// window.onload = function(){
//     alert('This is the call function. driven from window.onload');
// };

// window.onDOMContentLoaded = function(){
//     alert('This is the call function. driven from DOMContentLoaded');
// }; //// 작동하지 않음.
// //////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function() {
//     showDateTime();
//     console.log('document.addEventListener- DOMContentLoaded - 페이지의 초기화가 완료되었습니다!');
//   });

//   window.addEventListener('load', function() {
//     showDateTime();
//     console.log('window.addEventListener - load - 페이지 및 모든 리소스의 로딩이 완료되었습니다!');
//   });
  
//   window.addEventListener('beforeunload', function(event) {
//     showDateTime();
//     event.preventDefault();
//     console.log('window.addEventListener - beforeunload - 페이지를 떠나기 전에 처리해야 할 작업이 있습니다!');
//   });

//   window.addEventListener('unload', function() {
//     showDateTime();
//     console.log('window.addEventListener - unload - 페이지를 떠났습니다!');
//   });

//   window.addEventListener('hashchange', function() {
//     showDateTime();
//     console.log('window.addEventListener - hashchange - URL의 해시값이 변경되었습니다!');
//     console.log('변경된 해시값:', location.hash);
//   });

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('421 function is object');
// //////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////

// var foo = function(){
//     return function(){
//         console.log('This function is the return value');
//     }
// };

// var bar = foo();
// bar();

// const obj = {"name":"My name is object"};
// obj.baz = function(){return this.name};

// //////////////////////////////////////////////////////////////////////////////////////////////

// const add = function(x, y){
//     return x + y;
// };

// add.result = add(3,4);
// add.status = true;

// console.log(add)

// for (prop in add){
//     console.log('prop=',prop, 'add[prop]=', add[prop]);
// }


// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('415 function hoisting (함수 호이스팅)');
// // javascript 변수생성과 초기화 작업이 분리되어 진행함.
// //////////////////////////////////////////////////////////////////////////////////////////////
// funcAdd(1,2);
// function funcAdd(x,y){
//     console.log(x , ' + ', y, ' = ', x+y);
//     return x+y;
// }
// funcAdd(3,4);

// // funcMinus(4,3);
// const funcMinus = function(x,y){
//     console.log(x , ' - ', y, ' = ', x-y);
//     return x-y;
// }
// funcMinus(2,1);
// // >> 함수 표현식 방식으로 구현하도록 하자.



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('414 FUNCTION() 생성자 함수');
// //////////////////////////////////////////////////////////////////////////////////////////////
// const functionFunc = new Function('x','y', 'return x+y');
// console.log(functionFunc(1,2));



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('413　함수　표현식');
// //////////////////////////////////////////////////////////////////////////////////////////////
// const funcAdd = function(x, y){
//     return x+y;
// }
// let aa = funcAdd;
// console.log(aa(3,5));
// //////////////////////////////////////////////////////////////////////////////////////////////
// const funcFactorial = function funcFactorial(n){
//     if(n<=1){
//         console.log(n);
//         return n;
//     }
//     else{
//         console.log(n, "*");
//         return n * funcFactorial(n-1);
//     }
// }
// console.log(
//     funcFactorial(5)
// )

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('412　함수　선언문');
// //////////////////////////////////////////////////////////////////////////////////////////////
// function funcAdd(x, y){
//     return x+y;
// }
// console.log(funcAdd(3,5));


// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('359 유사배열객체');
// //////////////////////////////////////////////////////////////////////////////////////////////

// const arr = ['bar'];

// const obj = {
//     0:'bar',
//     length:1
// }

// Array.prototype.push.apply(obj, ['baz']);   //  object에 push 적용 가능
// Array.prototype.push.apply(obj, ['bax']);   //  object에 push 적용 가능

// console.log('arr',arr);
// console.log('obj',obj);



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('358 Array() 생성자 함수');
// //////////////////////////////////////////////////////////////////////////////////////////////
// const foo = new Array(3);
// console.log(foo);
// console.log(foo.length);

// const foo2 = new Array(1,'하나', true);
// console.log(foo2);
// console.log(foo2.length);

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log(' 배열 표준 메서드');  // 2023-05-16 재확인 필요.
// //////////////////////////////////////////////////////////////////////////////////////////////

// const arrPush = [0, 1, 2, 3, 'four', true];
// const pushArr = arrPush.push(false, null);      // 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
// // arrPush : [0, 1, 2, 3, 'four', true, false, null];
// // pushArr = arrPop.length


// const arrPop = [0, 1, 2, 3, 'four', true];
// const popArr = arrPop.pop();    // 배열의 마지막 요소를 제거하고, 제거된 요소를 반환합니다.
// // arrPop = [0, 1, 2, 3, 'four'];
// // popArr = true;


// const arrShift = [0, 1, 2, 3, 'four', true];
// const shiftArr = arrShift.shift();    // 첫번째 요소를 제거하고, 제거한 요소를 리턴
// // arrShift = [1, 2, 3, 'four'];
// // shiftArr = 0;


// const arrUnshift = [0, 1, 2, 3, 'four', true];
// const unshiftArr = arrUnshift.unshift(-100, 10);    // 배열의 앞에 하나 이상의 요소를 추가하고 새로운 길이를 리턴
// // arrUnshift = [-100, -10, 0, 1, 2, 3, 'four', true];
// // unshiftArr = 8;


// const arrSplice = [0, '하나', true, false];
// const spliceArr = arrSplice.splice(2,2,'뺌');
// /*
// arrSplice index 2에서 2개를 빼서 spliceArr에 전달하고 빠진 자리에 '뺌' push
// arrSplice = [0, '하나', '뺌']
// spiceArr = [true, false];
// **/
// const arrSplice2 = [0, '하나', true, false];
// const spliceArr2 = arrSplice2.splice(1,2,'뺌');
// /*
// arrSplice2 index 1에서 2개 요소 빼서 spliceArr2에 전달하고 빠진 자리에 '뺌' push
// arrSplice2 = [0, '뺌', false]
// spiceArr2 = ['하나', true];
// **/


// const arrSlice = [0, 1, 2, 3, 'four', true];
// const sliceArr = arrSlice.slice(3,9);    // arr의 index 3부터 9 - 1 까지 복사해서 sliceArr를 생성, 범위를 벗어나면? 벗어난 만큼만.
// // arr은 변화 없음. sliceArr만 생성
// // arrSlice = [0, 1, 2, 3, 'four', true];
// // sliceArr = [3, 'four', true];
// const arrSlice2 = [0, 1, 2, 3, 'four', true];
// const sliceArr2 = arrSlice2.slice(3,5);    // arr의 index 3 이상, 5 미만 까지 복사해서 sliceArr를 생성, 범위를 벗어나면? 벗어난 만큼만.
// // arr은 변화 없음. sliceArr만 생성
// // arrSlice2 = [0, 1, 2, 3, 'four', true];
// // sliceArr2 = [3, 'four'];


// const arr1 = [1, 2];
// const arr2 = [true, false];
// const concatArr = arr1.concat(arr2);
// // concatArr = [1,2,true,false]


// const arrForEach = [0, '하나', 2, 3, 'four', true];
// arrForEach.forEach((element)=>{
//     console.log(element);
// });


// const arrMap = [1,2,3,4];
// const mapArr = arrMap.map((element)=>{
//     return element ** 2;
// });
// console.log(mapArr);
// // mapArr = [1,4,9,16]


// const arrFilter = [1,2,3,4,5,6,7,8,9];
// const filterArr = arrFilter.filter((element)=>{
//     return element % 2 === 1;
// });
// console.log(filterArr);
// // 1,3,5,7,9

// const arrFilter2 = [0, '하나', 2, 3, 'four', true];
// const filterArr2 = arrFilter2.filter((element)=>{
//     return (element >= '가') && (element <= '힣');
// });
// console.log(filterArr2);
// console.log(arrFilter2);


// const arrDelete = [0, 1, 2, 3, 'four', true];
// const deleteArr = delete arrDelete[5];
// // arr은 length 유지 하지만 해당 Index 값이 undefined
// // deleteArr : true
// // arrDelete = [0, 1, 2, 3, 'four', empty];
// // arrDelete[5] : undefined


// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('357 배열 요소 삭제 값 삭제 ');
// //////////////////////////////////////////////////////////////////////////////////////////////
// const arr = [0,1,2,3];
// delete arr[2];      // index 2 기준 해당 요소 값을 삭제
// console.log(arr);   // 0, 1, undefined/empty ??  , 3
// console.log(arr.length); // 4

// const arr2 = [0,1,2,3];
// const aa = arr2.splice(2,1,-1);   // index 2 기준 1개 요소 삭제하고, -1을 추가한다.
// console.log(aa);        // 2
// console.log(arr2);        // 0, 1, -1, 3
// console.log(arr2.length); // 4

// const arr3 = [0,1,2,3];
// const bb = arr3.splice(2,2,-1);   // index 2 기준 2개 요소 삭제하고, -1을 추가한다.
// console.log(bb);        // 2, 3
// console.log(arr3);        // 0, 1, -1
// console.log(arr3.length); // 3

// const arr4 = [0,1,2,3];
// const cc = arr4.splice(2,2);   // index 2 기준 2개 요소 삭제하고, -1을 추가한다.
// console.log(cc);        // 2, 3
// console.log(arr4);        // 0, 1
// console.log(arr4.length); // 2



// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('354 배열과 객체');
// //////////////////////////////////////////////////////////////////////////////////////////////
// const colorArray = ['orange','yellow','blue','green','red','white','black'];
// colorArray.name = 'Color Array';
// colorArray.color = 'rainbow';
// const colorObject ={
//     0:'orange',
//     1:'yellow',
//     2:'blue',
//     3:'green',
//     4:'red',
//     5:'white',
//     6:'black',
//     'color':'rainbow',
//     'name':'Color Object'
// };

// console.dir(colorArray);
// console.dir(colorObject);

// console.log('property of array');
// for (let prop in colorArray){
//     console.log(prop, colorArray[prop]);
// }

// console.log('index / value of array');
// for (let i=0; i<colorArray.length; i++){
//     console.log(i,colorArray[i]);
// }


// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('chatGpt 배열 표준 메서드');
// //////////////////////////////////////////////////////////////////////////////////////////////
// var arr = [0,1,2];
// console.log('arr',arr);

// arr.push(3);
// console.log('arr',arr);  // 0,1,2,3

// arr.length = 5;          // 0,1,2,3, empty/undefined
// arr.push(4);             // 0,1,2,3, empty/undefined, 4
// console.log('arr',arr);

// const pop1 = arr.pop();  // 0,1,2,3, empty/undefined
// console.log("`const pop1 = arr.pop();`")
// console.log('pop1',pop1);
// console.log('arr',arr);

// const pop2 = arr.pop();  // 0,1,2,3
// console.log("`const pop2 = arr.pop();`")
// console.log('pop2',pop2);
// console.log('arr',arr);

// const newArr  = arr.slice(0,-1); 3 ||  0,1,2
// console.log("`const newArr  = arr.slice(0,-1);`")
// console.log('newArr',newArr);
// console.log('arr',arr);


// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('3531 배열 표준 메서드');
// //////////////////////////////////////////////////////////////////////////////////////////////
// var arr = [0,1,2];
// console.log(arr);

// arr.push(3);
// console.log(arr);

// arr.length = 5;
// arr.push(4);
// console.log(arr);


// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('353 배열 length property');
// //////////////////////////////////////////////////////////////////////////////////////////////
// var arr = [0,1,2];
// console.log('arr.length=',arr.length);
// console.log('arr=',arr);

// // arr.length = 5;
// // console.log('arr.length=',arr.length);
// // console.log('arr=',arr);

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('352 배열 요소 생성');
// //////////////////////////////////////////////////////////////////////////////////////////////
// //빈 배열
// var emptyArr = [];
// console.log('////////////////////////////////////////////////////////////////////////////');
// console.log('var emptyArr = [];');
// console.log('emptyArr=',emptyArr);
// console.log('emptyArr[0]=',emptyArr[0]);
// console.log('emptyArr.length=',emptyArr.length);
// console.log('emptyArr[emptyArr.length-1]=',emptyArr[emptyArr.length-1]);

// emptyArr.length = 9;
// console.log('////////////////////////////////////////////////////////////////////////////');
// console.log('emptyArr.length = 9;');
// console.log('emptyArr=',emptyArr);
// console.log('emptyArr[0]=',emptyArr[0]);
// console.log('emptyArr.length=',emptyArr.length);
// console.log('emptyArr[emptyArr.length-1]=',emptyArr[emptyArr.length-1]);

// // 동적 배열 요소 생성
// emptyArr[0] = 100;
// emptyArr[3] = '다섯';
// emptyArr[5] = true;
// console.log('////////////////////////////////////////////////////////////////////////////');
// console.log('emptyArr에 3개 요소 추가 후');
// console.log('emptyArr=',emptyArr);
// console.log('emptyArr[0]=',emptyArr[0]);
// console.log('emptyArr.length=',emptyArr.length);
// console.log('emptyArr[emptyArr.length-1]=',emptyArr[emptyArr.length-1]);

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('351 배열 리터럴');
// //////////////////////////////////////////////////////////////////////////////////////////////
// var colorArr = ['orange','yellow','blue','green','red','white','black'];
// console.log('colorArr.length=',colorArr.length);
// console.log('colorArr[0]=',colorArr[0]);
// console.log('colorArr[colorArr.length-1]=',colorArr[colorArr.length-1]);

// //////////////////////////////////////////////////////////////////////////////////////////////
// console.log('324 객체 프로퍼티 삭제');
// //////////////////////////////////////////////////////////////////////////////////////////////
// let foo = {
// name:'foo',
// age:30,
// gender:'male',
// //full-name:'Foo Bear',
// major:'computer science',
// };

// foo.major = 'biological science';

// foo['full-name']='Foo Bear';

// console.log('typeof foo=', typeof foo);
// console.log('foo=', JSON.stringify(foo, null, 3));

// let prop;
// for (prop in foo){
//     console.log("foo['",prop,"']=", foo[prop]);
// }

// foo.nickname = 'fool';
// console.log("After [foo.nickname = 'fool';] ");
// console.log('foo=', JSON.stringify(foo, null, 3));

// delete foo.nickname ;
// console.log("After [delete foo.nickname ;] ");
// console.log('foo=', JSON.stringify(foo, null, 3));
// console.dir(foo);

// console.log('323 for in + 객체 프로퍼티 제어');
// let foo = {
// name:'foo',
// age:30,
// gender:'male',
// //full-name:'Foo Bear',
// major:'computer science',
// };

// foo.major = 'biological science';

// foo['full-name']='Foo Bear';

// console.log('typeof foo=', typeof foo);
// console.log('foo=', foo);

// let prop;
// for (prop in foo){
//     console.log("foo['",prop,"']=", foo[prop]);
// }


// //////////////////////////////////////////////////////////////////////////////////////////////
// // 322 객체 프로퍼티 제어
// // javascript doesn't allow - linked variable like as   full-name >> error 
// console.log('322 객체 프로퍼티 제어');
// let foo = {
//     name:'foo',
//     age:30,
//     gender:'male',
//     //full-name:'Foo Bear',
//     major:'computer science',
// };

// docPrint('typeof foo='+ typeof foo);
// docPrint('foo='+ JSON.stringify(foo, null, 3));

// // console.log('typeof foo=', typeof foo);
// // console.log('foo=', foo);

// foo.major = 'biological science';

// docPrint("After [foo.major = 'biological science';] ");
// docPrint('typeof foo='+ typeof foo);
// docPrint('foo='+ JSON.stringify(foo, null, 3));

// // console.log("After [foo.major = 'biological science';] ");
// // console.log('typeof foo=', typeof foo);
// // console.log('foo=', foo);

// foo['full-name']='Foo Bear';

// docPrint("After [foo['full-name']='Foo Bear';] ");
// docPrint('typeof foo='+ typeof foo);
// docPrint('foo.full-name='+ foo.full-name);
// docPrint('foo["full-name"]='+ foo["full-name"]);
// docPrint('foo='+ JSON.stringify(foo, null, 3));

// console.log("After [foo['full-name']='Foo Bear';] ");
// console.log('typeof foo=', typeof foo);
// console.log('foo=', foo);
// console.log('foo=', JSON.stringify(foo, null, 3));

// tagPre.insertAdjacentHTML('beforeend', 'typeof foo='+ typeof foo);
// tagPre.insertAdjacentHTML('beforeend', '<br><br>');
// tagPre.insertAdjacentHTML('beforeend', 'foo='+ JSON.stringify(foo, null, 3));
//////////////////////////////////////////////////////////////////////////////////////////////
// 321 객체 생성

//3212  객체 리터럴 방식 이용
// let foo = {
//     name : 'foo',
//     age : 30,
//     gender : 'male'
// };

// console.log('3212  객체 리터럴 방식 이용');
// console.log('typeof foo=', typeof foo);
// console.log('foo=', foo);

//////////////////////////////////////////////////////////////////////////////////////////////
// 3211 object 생성자 함수 이용

// let foo = new Object();

// foo.name = 'foo';
// foo.age = 30;
// foo.gender = 'male';
// console.log('3211 object 생성자 함수 이용');
// console.log('typeof foo=', typeof foo);
// console.log('foo=', foo);

//////////////////////////////////////////////////////////////////////////////////////////////
// chatGpt
//////////////////////////////////////////////////////////////////////////////////////////////
// //  자바스크립트 객체 생성 방법
// console.log('chatGpt 자바스크립트 객체 생성 방법');
// //------------------------------------------------------------------------------//
// // 1 객체 리터럴 방식 ( Object Literal )
// const person = {
//     name:'John',
//     age:30,
//     email:'john@test.com'
// }

// //------------------------------------------------------------------------------//
// // 2 생성자 함수 방식 (Constructor Function)
// function PersonFunction(name, age, email){
//     this.name = name;
//     this.age = age;
//     this.email = email;
// }

// const personFunc = new PersonFunction('John',30,'john@test.com');

// //------------------------------------------------------------------------------//
// // 3 클래스 방식 (Class)
// class PersonClass {
//     constructor(name,age,email){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }
// }

// const personClass = new PersonClass('John',30,'john@test.com');

// //------------------------------------------------------------------------------//
// // Object.create()

// const personObject = Object.create({},{
//     name:{value:'John', title :"this name"},
//     age:{value:30, title :"this age"},
//     email:{value:'john@test.com', title :"this email"}
// });

// // const personObjectWrong = Object.create({},{
// //     name:'John',
// //     age:30,
// //     email:'john@test.com'
// // });     // wrong usage -- value must .....


// //------------------------------------------------------------------------------//
// // Object.create()
// const personObjectPrototype = {
//     name:'John',
//     age:30,
//     email:'john@test.com',
//     myPresentation:function(){
//         console.log("personObjectPrototype:", this.name , ' is ', this.age, ' years old.');
//     }
// };

// const personObjectMore = Object.create(personObjectPrototype);
// personObjectMore.myPresentation();

// console.dir(personObjectMore);
// console.dir(personObjectPrototype);


// const personObjectPrototype2 = {
//     name:{value:'John', title :"this name"},
//     age:{value:30, title :"this age"},
//     email:{value:'john@test.com', title :"this email"},
//     myPresentation:function(){
//         console.log("personObjectPrototype2:", this.name.value , ' is ', this.age.value, ' years old.');
//     }
// };

// const personObjectMore2 = Object.create(personObjectPrototype2);
// personObjectMore2.myPresentation();

