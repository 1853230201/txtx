// 创建对象
// 1、通过object构造函数
let myObject = new Object();
myObject.name='tianxi';
myObject.age=20;

// 2、通过对象字面量创建对象
const oStudent = {
name:"tianxi",
age: 20
};
console.log(oStudent.name);

console.log(typeof oStudent);//object

// array数组赋值
const a1 = new Array();
const a2 = [];
console.log(typeof a2);//object
console.log(a2[0]);//undefined


const a2 =[];
a2[0]='a';
a2[1]=2;
a2[5] = true;
console.log(typeof a2);
console.log(a2 instanceof Array);//instanceof 判断是不是数组

console.log(a2[2]);

const a3 =[1,34,'asd',ture];//装东西多灵活，性能差

const avengers = ['aaa','bbb','ccc','ddd']
delete avengers[2]//删除数组里的
console.log(avengers);

//解构数组 

const number1 = [1,2,3,4]
let a = number1[0];
let b = number1[1];
let c = number1[2];
let d = number1[3];
console.log(`a=${a}, b=${b},c=${c}`);

const [a,b,c,d] = [1,2,3,4];
console.log(`a=${a}, b=${b},c=${c}`);

//数组的属性和方法
const avengers = ['aaa','bbb','ccc','ddd']
console.log(avengers.length);//数组长度
// avengers.length = 1;
// console.log(avengers);不能再数组里面赋值

const avengers = ['aaa','bbb','ccc','ddd']
avengers.pop();//把原来数组破坏掉 删除最后一个
console.log(avengers);

const avengers = ['aaa','bbb','ccc','ddd']
avengers.push('eee');//加入新元素在最后一个
console.log(avengers);

const avengers = ['aaa','bbb','ccc','ddd']
console.log(avengers.shift());//删除数组中第一个元素
console.log(avengers);

const avengers = ['aaa','bbb','ccc','ddd']
avengers.unshift('fff');//加入一个元素在第一位
console.log(avengers);

const avengers = ['aaa','bbb','ccc','ddd']
const heroes = ['qqq','www','ttt','yyy']
const ah = avengers.concat(heroes);//合并两个数组
console.log(avengers,heroes,ah);

const ah = [...avengers,...heroes];//合并两个数组 
console.log(ah)

const avengers = ['aaa','bbb','ccc','ddd']
const av1 = avengers.join();//去除数组的括号
const av2 = avengers.join(`&`);//改变数值之间的符号
console.log(av1);
console.log(av2);

const avengers = ['aaa','bbb','ccc','ddd']
const av3 = avengers.slice(1,3);//在数组删除指定元素
console.log(avengers);
console.log(av3);

const avengers = ['aaa','bbb','ccc','ddd']
const av4 = avengers.splice(1,3,'tianxi','hhh');//在数组中删除并在这个位置添加元素
console.log(avengers);

const number1 = [1,23,4,5,56,2]
const a=number1.sort();
console.log(number1);
console.log(a);

const str = ['a','b','c','d']
str.revers();
console.log(str);


const avengers = ['aaa','bbb','ccc','ddd'];
const a=avengers.indexOf('aaa');
console.log(a);

const avengers = ['aaa','bbb','ccc','ddd'];
const b=avengers.includes('aaa');
console.log(b);

//多维数组

const ma=[[1,2],[3,4]];
console.log(ma)
console.log(ma[0][0]);
console.log(ma[0][1]);

const summer = ['qwe','rty','tyu']
const winter = ['qdf','ggy','dgu']
const nested = [summer,winter]


const list2 = new Set('hellow');
console.log(list2);

const list4 = new Set().add(`the`).add(`quik`).add(`ssdd`);
const a = Array.from(list4)
console.log(a);

const oArray1 = [1,23,4,34,5,4,3]
const oSet1 = new Set(oArray1);
console.log(oSet1);
const oArray2 = [...oSet1];
console.log(oArray2);
 
//weakset
const student = {
    name:'tian',
    age:20
}
const weak = new WeakSet();
weak.add(student);
student = null;
console.log([...strong][0]);










