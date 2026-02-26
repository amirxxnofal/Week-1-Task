// [ Part 1 ]
//1.
let str = "123"
let result = Number(str) + 7; /*or*/ result = parseInt(str) + 7
console.log(result);
//2.
let ex = 0;
if(!ex){console.log("Invalid");} 
//3.
for (let i = 1; i <= 10; i++){
    if (i % 2 == 0) { continue; } else { console.log(i)}
}
//4.
let arrNum = [1, 2, 3, 4, 5]
let newArr =arrNum.filter(x => x % 2 == 0)
console.log(newArr);
//5.
let x = [1, 2, 3], y = [4, 5, 6] 
let xy = [...x,...y]
console.log(xy);
//6.
let dayNum = 2, dayStr = ""
switch (dayNum) {
    case 1: dayStr = "sunday"; break ;
    case 2: dayStr = "Monday"; break ;
    case 3: dayStr = "Tuesday"; break ;
    case 4: dayStr = "Wednesday"; break ;
    case 5: dayStr = "Thursday"; break ;
    case 6: dayStr = "Friday"; break ;
    case 7: dayStr = "Saturday"; break ;
}
console.log(dayStr);
//7.
let arrStr = ["a", "ab", "abc"]
let arrMap = arrStr.map(x=> x.length);
console.log(arrMap);
//8.
const divisible = function (num) {
    if (num % 3 == 0 && num % 5 == 0) { console.log("Divisible by both"); }
    else{console.log("Not Divisible");}
}
divisible(15)
//9.
const squareNum = (x) => {return x ** 2 };
console.log(squareNum(5));
//10.
const person = {name: 'John', age: 25}
const value = function ({name,age}) {
    return name+" is "+age+" years old";
}
console.log(value(person));
//11.
let sum = 0;
//const multiVal = (...x) => { x.forEach(z => sum += z); return sum};
const multiVal = (...x)=> x.reduce((sum,num)=>sum+num,0);
console.log(multiVal(1, 2, 3, 4, 5));
//12.
function delayedSuccess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
delayedSuccess().then(message => console.log(message));

//13.
let myArr = [1, 3, 7, 2, 4]
const largestNum = Math.max(...myArr)
console.log(largestNum);
//14.
let myObj = {name: "John", age: 30} 
const returnedArr = function (obj) {
    return Object.values(obj);
}
console.log(returnedArr(myObj));
//15.
function splitWords(str) {
  return str.split(" ");
}
const input = "The quick brown fox";
console.log(splitWords(input));



// [ Part 1 ]
    // 1. What is the difference between forEach and for...of ? When would you use each ? 
    //هما الاتنين بيطبقوا نفس المبدا لكن الفرق اني بقدر اتحكم في for واقدر اوقفها لكن الforeach افضلها لو عندي array  وعاز اطلع منها نتيجه معينه بسرعه 
   
    // 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
    // يعني انا عني في JS بترفع المتغيرات لاول الاسكوب زي ال(var) لكن TDZ  وي بتكون الفتره بين بدايه الاسكوب  ولما اعرف المتغير
   
    // 3. What are the main differences between == and ===? 
    // [==]دا بيقارن القيم بس  عكس [===] بتقارن القيم والنوع كمان  واه == بتحول النوع وبعدين تقارن 
   
    // 4. Explain how try-catch works and why it is important in async operations. 
    // هو الtry-catch عشان لو الكود ظهر فيه مشكله خلال التشغيل البرنامج ميعطلش ويتعامل مع المشكله دي وكمان اطبع مسج للمستخدم بالمشكله
   
    // 5. What’s the difference between type conversion and coercion? Provide examples of each. 
    // هو للي فهمته ان الconversion اني بحول القيم بنفسي او يدوي عكس coercion بيكون التحويل تلقائي  زي مثلا  هنا string(647) هنا انا حولت القيم يدوي لكن مثلا هنضرب رقم ونص هيحول النص لرقم تلقائي 5 و "5"  25