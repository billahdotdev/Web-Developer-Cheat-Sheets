/* ===============================
   ⚡ ULTIMATE JAVASCRIPT CHEAT SHEET
   100+ Topics | Basics → Advanced
   =============================== */

/* 1. Variables */
var a = 1; // function-scoped
let b = 2; // block-scoped
const c = 3; // block-scoped, immutable binding

/* 2. Data Types */
let str = "Hello";      // string
let num = 42;           // number
let bool = true;        // boolean
let n = null;           // null
let u = undefined;      // undefined
let sym = Symbol("id"); // symbol
let big = 123n;         // bigint
let obj = {};           // object

/* 3. typeof */
typeof 42;    // "number"
typeof null;  // "object" (quirk)
typeof NaN;   // "number"

/* 4. Type Conversion */
Number("42"); // 42
String(123);  // "123"
Boolean(0);   // false

/* 5. Operators */
1 + 2;     // addition
3 - 1;     // subtraction
2 * 3;     // multiplication
10 / 2;    // division
10 % 3;    // remainder
2 ** 3;    // exponentiation

/* 6. Comparison */
2 == "2";   // true (loose)
2 === "2";  // false (strict)
null == undefined; // true
null === undefined; // false

/* 7. Logical */
true && false; // AND
true || false; // OR
!true;         // NOT
?? "default";  // Nullish coalescing

/* 8. Strings */
"Hello".length;
"abc".toUpperCase();
"abc".includes("a");
"abc".replace("a","z");

/* 9. Template Literals */
let name = "Ali";
`Hello ${name}!`;

/* 10. Numbers */
Math.round(4.7);
Math.floor(4.7);
Math.ceil(4.1);
Math.random();

/* 11. Arrays */
let arr = [1,2,3];
arr.push(4); arr.pop();
arr.shift(); arr.unshift(0);
arr.includes(2);

/* 12. Array Methods */
[1,2,3].map(x=>x*2);
[1,2,3].filter(x=>x>1);
[1,2,3].reduce((a,b)=>a+b,0);
[1,2,3].find(x=>x===2);
[1,2,3].some(x=>x>2);
[1,2,3].every(x=>x>0);

/* 13. Array Destructuring */
let [x,y] = [1,2];

/* 14. Object */
let user = {name:"Ali", age:20};
user.name; user["age"];

/* 15. Object Methods */
Object.keys(user);
Object.values(user);
Object.entries(user);
Object.assign({}, user);

/* 16. Object Destructuring */
let {name, age} = user;

/* 17. Spread/Rest */
let nums = [1,2,3];
let copy = [...nums];
function sum(...args){ return args.reduce((a,b)=>a+b); }

/* 18. Functions */
function add(a,b){return a+b;}
const mul = (a,b)=>a*b;

/* 19. Default Params */
function greet(msg="Hi"){ console.log(msg); }

/* 20. IIFE */
(function(){ console.log("IIFE"); })();

/* 21. Scope */
let g = "global";
function scope(){ let l="local"; }

/* 22. Hoisting */
console.log(x); var x=5; // undefined

/* 23. Closures */
function outer(){
  let count=0;
  return function(){ count++; return count; }
}
let inc=outer();

/* 24. Callbacks */
function fetchData(cb){ cb("data"); }

/* 25. Promises */
new Promise((res,rej)=>res(42)).then(console.log);

/* 26. async/await */
async function foo(){ return await Promise.resolve(42); }

/* 27. setTimeout / setInterval */
setTimeout(()=>console.log("hi"),1000);
let id=setInterval(()=>console.log("tick"),1000);
clearInterval(id);

/* 28. Classes */
class Person {
  constructor(name){this.name=name;}
  greet(){console.log(this.name);}
}

/* 29. Inheritance */
class Student extends Person {
  constructor(name,grade){ super(name); this.grade=grade; }
}

/* 30. this keyword */
let obj2 = {
  name:"Ali",
  greet(){console.log(this.name);}
};

/* 31. bind/call/apply */
function greet(msg){ console.log(msg+" "+this.name); }
greet.call({name:"Ali"},"Hi");

/* 32. Prototype */
function Car(make){this.make=make;}
Car.prototype.drive=function(){console.log("Vroom");};

/* 33. ES6 Modules */
// export default function(){}
// import fn from "./file";

/* 34. try/catch/finally */
try{ throw Error("oops"); }
catch(e){ console.error(e); }
finally{ console.log("done"); }

/* 35. Error Types */
// ReferenceError, TypeError, SyntaxError, RangeError

/* 36. Strict Mode */
"use strict";

/* 37. JSON */
JSON.stringify({a:1});
JSON.parse('{"a":1}');

/* 38. Date */
let d=new Date();
d.getFullYear();

/* 39. RegExp */
let re=/\d+/;
re.test("123"); // true

/* 40. Map */
let m=new Map();
m.set("a",1); m.get("a");

/* 41. Set */
let s=new Set([1,2,2]);
s.has(1); // true

/* 42. WeakMap / WeakSet */
// Keys must be objects

/* 43. Symbol */
let sym1=Symbol("id");

/* 44. BigInt */
let bigNum=123n;

/* 45. Optional Chaining */
user?.address?.city;

/* 46. Nullish Coalescing */
let val = null ?? "default";

/* 47. for...of */
for(let n of [1,2,3]) console.log(n);

/* 48. for...in */
for(let k in user) console.log(k);

/* 49. Generators */
function* gen(){ yield 1; yield 2; }
for(let v of gen()) console.log(v);

/* 50. Iterators */
let it=[1,2][Symbol.iterator]();

/* 51. Modules: Named Export */
// export const PI=3.14; import {PI} from "./file";

/* 52. import * as */
// import * as math from "./math";

/* 53. Dynamic import */
// let mod=await import("./math.js");

/* 54. Event Loop */
console.log("start");
setTimeout(()=>console.log("async"),0);
console.log("end");

/* 55. Microtasks vs Macrotasks */
// Promise.then = microtask
// setTimeout = macrotask

/* 56. Debounce */
function debounce(fn,delay){
  let t;
  return (...args)=>{
    clearTimeout(t);
    t=setTimeout(()=>fn(...args),delay);
  };
}

/* 57. Throttle */
function throttle(fn,delay){
  let last=0;
  return (...args)=>{
    if(Date.now()-last>delay){
      last=Date.now(); fn(...args);
    }
  };
}

/* 58. DOM Selectors */
document.getElementById("id");
document.querySelector(".class");

/* 59. DOM Events */
document.addEventListener("click",()=>{});

/* 60. DOM Manipulation */
let el=document.createElement("div");
document.body.appendChild(el);

/* 61. localStorage/sessionStorage */
localStorage.setItem("key","val");
sessionStorage.getItem("key");

/* 62. Cookies */
document.cookie="name=Ali; path=/";

/* 63. Fetch API */
fetch("/api").then(res=>res.json()).then(console.log);

/* 64. async fetch */
async function getData(){
  let res=await fetch("/api");
  let data=await res.json();
}

/* 65. Web APIs */
navigator.geolocation.getCurrentPosition(console.log);
alert("Hi");
confirm("Ok?");

/* 66. ES6 Features */
// let/const, arrow fn, template literals, destructuring

/* 67. Object Literal Shorthand */
let age2=20;
let person={age2};

/* 68. Computed Property Names */
let prop="name";
let obj3={[prop]:"Ali"};

/* 69. Default Params */
function foo(x=1){return x;}

/* 70. Rest Params */
function bar(...args){console.log(args);}

/* 71. Spread */
let arr2=[...arr,4];

/* 72. Promise.all */
Promise.all([p1,p2]);

/* 73. Promise.race */
Promise.race([p1,p2]);

/* 74. Promise.any */
Promise.any([p1,p2]);

/* 75. WeakRef (ES2021) */
// new WeakRef(obj);

/* 76. Intl API */
new Intl.DateTimeFormat("en-US").format(new Date());

/* 77. import.meta (ES2020) */
// import.meta.url

/* 78. Optional catch binding */
try { throw 1; } catch { console.log("err"); }

/* 79. Object.fromEntries */
Object.fromEntries([["a",1],["b",2]]);

/* 80. Array.flat */
[1,[2,[3]]].flat(2);

/* 81. Array.flatMap */
[1,2,3].flatMap(x=>[x,x*2]);

/* 82. At() */
[1,2,3].at(-1); // 3

/* 83. String trimStart/trimEnd */
"  hi ".trimStart().trimEnd();

/* 84. padStart/padEnd */
"5".padStart(3,"0");

/* 85. Object.hasOwn */
Object.hasOwn({a:1},"a");

/* 86. WeakSet Example */
let ws=new WeakSet();
ws.add({});

/* 87. BigInt Operations */
10n+20n;

/* 88. Proxy */
let target={};
let proxy=new Proxy(target,{
  get(obj,prop){ return prop in obj?obj[prop]:42; }
});

/* 89. Reflect */
Reflect.get({x:1},"x");

/* 90. Map vs Object */
// Map: any keys, preserves order, size

/* 91. Tail Call Optimization (theoretical) */

/* 92. Garbage Collection */
// Automatic

/* 93. eval() */
eval("2+2");

/* 94. with() (deprecated) */

/* 95. Strict Equality Best Practice */
// Always use ===

/* 96. Currying */
const curry=a=>b=>c=>a+b+c;
curry(1)(2)(3);

/* 97. Partial Application */
function add(a,b,c){return a+b+c;}
let add5=add.bind(null,5);

/* 98. Compose/pipe */
const compose=(f,g)=>x=>f(g(x));

/* 99. Functional Programming Tools */
[1,2,3].map(x=>x+1).filter(x=>x>2);

/* 100. Event Bubbling/Capturing */
// addEventListener("click",fn,true) → capture

/* 101. StrictMode in JS vs React */
// "use strict";

/* 102. ESNext Proposal Examples */
// ?. ?? ||= &&= ??=

