import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views")
app.use(logger);
// express application이 from value를 이해하고 자바스크립트 형식으로 변경
app.use(express.urlencoded({extended:true}))
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;