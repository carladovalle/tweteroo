import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("ok");
});

app.post("/tweets", (req, res) => {
    const username = req.body.username;
    const tweet = req.body.tweet;
    const avatar = users.find(item => item.username === username).avatar;
    tweets.push({ username, tweet, avatar });
    res.send("ok");
})

app.get("/tweets", (req, res) => {
    res.send(tweets.slice(-10));
})

app.listen(5000, () => {
    console.log("Servidor rodando.")}
);