import express from 'express';
import { checkGuess } from './src/checkGuess';
import { get } from 'http';

const app = express();
app.use(express.json());
                                                    const port = process.env.port || 5080;

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/getRandomWord', (req,res) => {
    res.status(200).json({
        data: [],
    });
});

app.post('/checkWord', (req, res) => {
    console.log(req.body);
    checkGuess(req.body);
});