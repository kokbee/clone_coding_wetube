import "./db";
import "./models/Video";
import app from "./server";

const PORT = 8450;

const handleListening = () => console.log(`🚀 Run server on port:${PORT}`);
app.listen(PORT, handleListening);