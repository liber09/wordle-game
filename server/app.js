import express from "express";
export const api = express();

api.get("/highscore/:wordLength/:uniqueLetters", (req, res) => {
    const highscores = [];
    res.status(201).send(newHighscore);
});