import express from "express";

const PORT = 8005;
const app = express();

// middle
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log(`${req.path}`);
    // 다음으로 넘어감
    next();
  };

// final
const handleHome = (req, res) => {
    return res.send("middlewares");
};

app.get("/", logger, handleHome);

const handleListening = () => console.log(`Run server on port:${PORT}`);
app.listen(PORT, handleListening);