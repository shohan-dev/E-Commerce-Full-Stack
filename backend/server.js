import express from "express";
import { connectDB } from "./config/db.js";
import { ENV_VARS } from "./config/envVars.js";
import cookieParser from "cookie-parser";
import authrouter from "./routes/auth.route.js";


const PORT = ENV_VARS.PORT;

const app = express();
app.use(express.json()); // will allow us to parse req.body
app.use(cookieParser());

app.use("/api/v1/auth", authrouter );




app.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
	connectDB();
});
