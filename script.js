"use strict";
// ***********1************
// let user = {};
// Object.defineProperty(user, 'name', {
//     value: 'Dmyto',
//     writable: false,
// });
// console.log(user);
// Object.defineProperty(user, 'age', {
//     value: '33',
//     writable: false,
// });
// console.log(user);
// Object.defineProperty(user, 'id', {
//     value: '3343',
//     configurable: false,
//     writable: false,
// });
// console.log(user);
// document.write(user)



// ************2***************
// let dataBase = {
//     dbName: 'user',
//     dmtype: 'mySQL',
// }
// let configurateDB = {
//     token: '123',
//     password: '567',
//     user: 'admin',
// }
// Object.freeze (dataBase);
// Object.seal(configurateDB);
// console.log(Object.isFrozen(dataBase));
// console.log(Object.isSealed(configurateDB));


// ************3***************
const salaries = {
  frontend: 2000,
  backend: 1500,
  design: 1000,
};

Object.defineProperty(salaries, "sum", {
  get() {
    let sum = 0;
    for (let salary in this) {
      sum += this[salary];
    }
    console.log(sum);
  },
  enumerable: false,
});

Object.defineProperty(salaries, "addSalaries", {
  set(value) {
    let salary;
    for (let i = 0; i < value.length; i++) {
      salary = value[i].split(" : ");
      this[salary[0]] = +salary[1];
    }
  },

  enumerable: false,
});

console.log(salaries);
salaries.sum;
salaries.addSalaries = ["frontend: 2500", "design: 1300", "manager: 800"];
console.log(salaries);
salaries.sum;



// *******************4******************
// let user = {
//   name: "Mike",
//   surname: "Davis",
//   age: 25,
// };

// Object.defineProperty(user, "userInfo", {
//   get() {
//     let result = [];

//     for (const key in this) {
//       result.push(`${key} : ${this[key]}`);
//     }
//     return result.join(', ');
//   },
//   enumerable: false,
// });

// user.userInfo;
// console.log(user.userInfo);
// user.login = "MK_18";
// user.userInfo;
// console.log(user.userInfo);
// document.write(user.userInfo);