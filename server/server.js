import express from 'express';

const app = express();
const port = process.env.port || 5080;

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/express_backend', (req,res) => {
    res.send({express: 'YOUR EXPRESS BACKDEND IS CONNECTED TO REACT'})
});