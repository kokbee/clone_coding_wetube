import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 8450;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => console.log(`Run server on port:${PORT}`);
app.listen(PORT, handleListening);