type MyCache={
    [key:string]:number;
}
function cashingSum(a:number,b:number,cache:MyCache):number{
    let key=`${a}+${b}`
    if (!(key in cache))
    {
        cache[key]=(a+b)
        console.log("adding to cache")
        return cache[key];
    }
    else {
        console.log("reading from cache")
        return cache[key]
    }
}
let cache:MyCache={};

console.log(cashingSum(1,2,cache))
console.log(cashingSum(1,2,cache))
console.log(cashingSum(2,3,cache))
console.log(cashingSum(2,3,cache))
console.log(cashingSum(3,2,cache))
