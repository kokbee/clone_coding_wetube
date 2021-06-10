import express from "express";

const PORT = 8005;
const app = express();

const handleHome = (req, res) =>{
    return res.send("home");
}

const handleLogin = (req, res) =>{
    return res.send("login");
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Run server on port ${PORT}`);
app.listen(PORT, handleListening);