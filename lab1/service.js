function isOdd(arr){//seems like a better name

    arr=arr.filter((num)=>num%2===0)
    return arr
}
module.exports = {
    isEven:isEven
}
