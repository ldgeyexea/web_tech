import express from 'express';
import {port} from "./config.js";

const app = express();
import ejs from 'ejs'
//has to be this way in type:module
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
//
import {convertData} from "./service.js";

let chart1 = {
    "type": "line",
    "data": {
        "labels": ["January", "February", "March", "April", "May", "June"],
        "datasets": [{
            "label": "My First dataset",
            "backgroundColor": "rgb(255, 99, 132)",
            "borderColor": "rgb(255, 99, 132)",
            "data": [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    "options": {}
};

const temp = `Czas,Temperatura
2023-11-09 10:00:00,10
2023-11-09 11:00:00,13
2023-11-09 12:00:00,16
2023-11-09 13:00:00,18
2023-11-09 14:00:00,19
2023-11-09 15:00:00,19
2023-11-09 16:00:00,17`;

const products = [
    {name: 'Laptop', price: 1000},
    {name: 'Smartphone', price: 500},
    {name: 'Tablet', price: 300}
];

let operationHistory = [];
let operationHistoryAdd = [];
let operationHistorySub = [];
let operationHistoryMul = [];
let operationHistoryDiv = [];


const dataChart2 = convertData(temp);
const chart2 = JSON.stringify(dataChart2);

//-- engine setup
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
//-- engine setup
app.listen(port, function () {
    console.info(`Server is running at port ${port}`);
});
app.get('/', (req, res) => {
    res.render(__dirname + '/index.html', {
        subject: 'Technologie aplikacji webowych',
        chart1: JSON.stringify(chart1),
        chart2: chart2,
        products: products
    })
})
app.get('/template/:variant/:a/:b', (req, res) => {
    const add = (a, b) => {
        return a + b
    };
    const sub = (a, b) => {
        return a - b
    };
    const mul = (a, b) => {
        return a * b
    };
    const div = (a, b) => {
        if (b === 0)
            throw new Error("illegal argument");
        return a / b
    };

    let {variant, a, b} = req.params;
    let result;
    a = parseFloat(a);
    b = parseFloat(b);
    if (variant !== 'add' && variant !== 'sub' && variant !== 'mul' && variant != 'div') {
        res.send(`variant ${variant} does not exist`)
    }
    if (isNaN(a) || isNaN(b)) {
        res.send(`both arguments must be numeric`)
    } else {

        switch (variant) {
            case 'add':

                result = add(a, b);
                operationHistoryAdd.push({x: Date.now().toString(), y: result})
                operationHistory=operationHistoryAdd;
                break;
            case 'sub':
                result = sub(a, b);
                operationHistorySub.push({x: Date.now().toString(), y: result})
                operationHistory=operationHistorySub;
                break;
            case 'mul':
                result = mul(a, b);
                operationHistoryMul.push({x: Date.now().toString(), y: result})
                operationHistory=operationHistoryMul;
                break;
            case 'div':
                result = div(a, b);
                operationHistoryDiv.push({x: Date.now().toString(), y: result})
                operationHistory=operationHistoryDiv;
                break;
        }



        res.render(__dirname + '/operations.html', {
            subject: 'math oprations',
            result: result,
            variant: variant,
            operationHistory: JSON.stringify((operationHistory)),
            a: a,
            b: b
        })
    }

});
