// 定义函数的两种方式
let a = '',b='',c='';//字符串字面量
let oArray = [1,2,3,4];

// 函数声明
function sayHellow(){
    console.log('Hellow,JavaScript');
}//定义了一个函数字面量

//函数表达式
const sayHellow=function(){
    console.log('Hellow,JavaScript');
}//匿名函数表达式

const sayHellow=function sayHi(){
    console.log('Hellow,JS')
}//命名函数表达式

//function 构造函数，不建议使用
const sayHellow = new Function('console.log("hellow,js")');

//ES6 新增语法，箭头函数
const sayHellow=()=>{console.log('hellow,js')}; 

sayHellow();

const sayHellow = function(){
    let a = 1,b = 2;
    let c=a+b;
    return c;
};
console.log(sayHellow());//3

//函数参数

const add = function(a,b){
    return a+b;
}
let a = add(2,3);
console.log(a);//5

const add = function(a,b){
    return a+b;
}
let b = add1();
console.log(b);//NaN = not a number,undefined + undefined

// let b=1;
// b = Infinity;
// b = -Infinity;

let b = add1();//只传递一个参数
console.log(b1);//NaN

let b = add1(1,2,3);
console.log(b3);//3

const add2 = function(a,b){
    let a1 = arguments.length;
    console.log(a1);
    console.log(arguments[S]);
    return a+b;
};

let b4 = add2(1,2,2,2,3,4);
console.log(b4);


//把参数相加
const add3 = function(){
    let sum=0;
    for(let i=0;i < arguments.length;i++){
        sum = sum +arguments[i]
    }
    return sum;
}
let b5 = add3(1,2,3,4,5,5.6)
console.log(b5);

const add = function(...numbers){
    let sum=0;
    for(const num of numbrs){
        sum = sum +num;
    }
    return sum;
}
let a1 = add(1,2,3,4,5,5.6)
console.log(a1);

const add2 =  function(a,b){
    return a+b;
}

const add2 = (a,b) => a+b;

const add3 = () =>{return 3;}

const add4 = a=>a+1;
const add4 = function(a){
    return a+1;
}

const sing = function(song,calllback){
    console.log('我在唱${song}');
    if (typeof calllback ==='function'){
        calllback();
    }
}

sing('国歌',dance);

//
const dance = () => {console.log('我在跳舞');}

const sing = (song,calllback)=>{
    console.log('我在唱${sang}')
    if (typeof calllback =='function'){
        calllback()
    }
}

sing('国歌',()=>(console.log('我在跳舞')));

//回调函数的应用
//数组排序 Array.sort()

const oArray = [1,5,8,2,0,3,4,5];
console.log(oArray.sort());

const num = (a,b) => a+b;
console.log(oArray.sort(num));


















