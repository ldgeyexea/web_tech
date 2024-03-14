function cashingSum(a, b, cache) {
    var key = "".concat(a, "+").concat(b);
    if (!(key in cache)) {
        cache[key] = (a + b);
        console.log("adding to cache");
        return cache[key];
    }
    else {
        console.log("reading from cache");
        return cache[key];
    }
}
var cache = {};
console.log(cashingSum(1, 2, cache));
console.log(cashingSum(1, 2, cache));
console.log(cashingSum(2, 3, cache));
console.log(cashingSum(2, 3, cache));
console.log(cashingSum(3, 2, cache));
