let text = "123slowo"
console.log(reverseText(text));

console.log(temperatureConversion(0,"F","C"));
console.log(temperatureConversion(0,"F","K"));
console.log(temperatureConversion(0,"C","F"));
console.log(temperatureConversion(0,"C","K"));
console.log(temperatureConversion(0,"K","C"));
console.log(temperatureConversion(0,"K","F"));

console.log(sortWithDirectionSelection([6,8,2,4,4,4],0));

function reverseText(text){
    return text.split('').reverse().join('')
}

function temperatureConversion(temperature, unitStart, unitTarget) {
    if (!['C', 'F', 'K'].includes(unitStart) || !['C', 'F', 'K'].includes(unitTarget)) {
        return null;
    }

    let result=temperature;
    switch (unitStart) {
        case 'C':
            if (unitTarget === 'K') {
                result = temperature + 273.15;
            } else if (unitTarget === 'F') {
                result = (temperature * 9/5) + 32;
            }
            break;
        case 'F':
            if (unitTarget === 'C') {
                result = (temperature - 32) * 5/9;
            } else if (unitTarget === 'K') {
                result = ((temperature - 32) * 5/9) + 273.15;
            }
            break;
        case 'K':
            if (unitTarget === 'C') {
                result = temperature - 273.15;
            } else if (unitTarget === 'F') {
                result = ((temperature - 273.15) * 9/5) + 32;
            }
            break;
    }

    return result;
}

function sortWithDirectionSelection(arr,direction){
    let comparatorDesc = (a, b) => a > b ? -1 : 1;
    let comparatorAsc = (a, b) => a <= b ? -1 : 1;

    return direction ===0 ? arr.sort(comparatorAsc) : arr.sort(comparatorDesc)
}
