console.log('pierwszy skrypt - działa!');
console.log('------')

let arr=[1,2,3,4,5,6];
console.log(arr);
arr.pop()
console.log(arr);
arr=addNumber(arr,0,1)
arr=addNumber(arr,1,8)
console.log(arr)
console.log('------')


console.log(txtTOPowersOfNumbers("1.2.3.4.5.6.7.8.9"))
console.log('------')


const sqrArea = (side) => {return side*side}
let side=5;
console.log("area of square with a side of "+side+" is "+sqrArea(side))
side=50;
console.log("area of square with a side of "+side+" is "+sqrArea(side))
console.log('------')


const students = ["Olek", "Janek", "Stefan", "Tymek", "Sławek"];
console.log(getRandomFrmArray(students))
console.log('------')
console.log('testowanie funkcji losującej')
validateRandomGet(students,10000)
console.log('------')


function addNumber(arr,location,num){

    if (location === 1)
    {
      arr.push(num);
    }else if(location === 0){
       arr.unshift(num);
    }
    else{
        throw "not in scope";
    }
    return arr;
}

function txtTOPowersOfNumbers(text)
{
    let arr=text.split('.');
    arr=arr.map((value)=> value*value)
    text=arr.join('.')
    return text;
}

function getRandomFrmArray(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}
function validateRandomGet(arr,n){
    let map = new Map();
    // let values = map.get('key');
    arr.forEach((elem)=>map.set(elem,0));

    let random=''
    for(let i =0 ; i<n ; i++)
    {
        random=getRandomFrmArray(students);
        map.set(random,map.get(random)+1)
    }

    arr.forEach((elem)=>console.log(map.get(elem)));
}

