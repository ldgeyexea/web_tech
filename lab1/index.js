let service = require('./service');

let arr=[1,2,3,4,5,6,7,8,9];
arr=service.isOdd(arr)
arr.forEach((elem)=>console.log(elem))