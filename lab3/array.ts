function mergeArrays<T,U>(arr1:Array<T>,arr2:Array<U>):Array<T|U> {
    return [...arr1,...arr2]
}
let arr1:number[]=[1,2,3,4];
let arr2:string[]=["abc","def","ghi","jkl"];

let arrMerged :Array<number|string>=mergeArrays(arr1,arr2)
console.log(arrMerged)