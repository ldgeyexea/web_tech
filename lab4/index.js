import express from 'express';
import {preQuestions} from "./preQuestions.js";
import {port} from "./config.js";
const app = express();

app.get('/api/questions', (request, response) => {
    response.send(preQuestions);
});
app.get('/api/questions/:id', (request, response) => {
    let id=request.params.id;
    if (id<preQuestions.length||id<0)
        response.send(preQuestions[id]);
    else
        response.send("question out of scope")
});

app.post('/api/questions/:id',(req,res)=>{
    let id=req.params.id;
    if (id>=preQuestions.length) {
        preQuestions.push({
            category: "generic",
            type: "generic",
            difficulty: "generic",
            question: "generic",
            correct_answer: "generic",
            answers: ["generic"]
        })
        res.send('POST request sent')
    }else {
        res.send("that resource already exists")
    }

});

app.listen(port, function () {
    console.info(`Server is running at port ${port}`);
});