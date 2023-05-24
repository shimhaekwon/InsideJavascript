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
}
///// common fuction
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
console.log('442 호출 패턴과 this 바인딩');
//////////////////////////////////////////////////////////////////////////////////////////////

////// javascript -- 내부 함수 호출 패턴을 정의해놓지 않는다.
//////////////////////////////////////////////////////////////////////////////////////////////
var value = 100;

var myObject = {
    value:1,
    func1:function(){
        this.value += 1;
        showDateTime();
        console.log('myObject-func1() called. this : ', this);
        console.log('myObject-func1() called. this.value : ', this.value);

        func2 = function(){
            this.value += 1;
            showDateTime();
            console.log('myObject-func2() called. this : ', this);
            console.log('myObject-func2() called. this.value : ', this.value);

            func3 = function(){
                this.value += 1;
                showDateTime();
                console.log('myObject-func3() called. this : ', this);
                console.log('myObject-func3() called. this.value : ', this.value);
    
            }
            func3();
        }
        func2();
    }
};
myObject.func1();
/*
2,3,4 가 예상되었는데
2, 101, 102 가 리턴됨.

결국 func2(), func3() 가 보는 value 는 
  myObject.value:1 이 아니라
  var value=100; >> window.value 임.
*/
//////////////////////////////////////////////////////////////////////////////////////////////
//// >>>>>  2, 3, 4 가 리턴되게 하려면??
//////////////////////////////////////////////////////////////////////////////////////////////
console.log('=========================================================================================================');
console.log("it's over myObject()");
console.log('=========================================================================================================');
var value2 = 200;
var myObject2 ={
    value2:1,
    func1 : function(){
        var that = this;
        showDateTime();
        console.log('myObject2-func1() called. this : ', this);
        console.log('myObject2-func2() called. that : ', that);

        this.value2 += 1;
        console.log('myObject2-func1() called. this.value2 : ', this.value2);

        var func2 = function(){
            showDateTime();
            console.log('myObject2-func2() called. this : ', this);
            console.log('myObject2-func2() called. that : ', that);
            that.value2 += 1;
            console.log('myObject2-func2() called. this.value2 : ', this.value2);
            console.log('myObject2-func2() called. that.value2 : ', that.value2);

            var func3 = function(){ 
                showDateTime();
                console.log('myObject2-func3() called. this : ', this);
                console.log('myObject2-func3() called. that : ', that);                   
                that.value2 += 1;
                console.log('myObject2-func3() called. this.value2 : ', this.value2);
                console.log('myObject2-func3() called. that.value2 : ', that.value2);
            }
            func3();
        }
        func2();
    }
}
myObject2.func1();
//////////////////////////////////////////////////////////////////////////////////////////////

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

