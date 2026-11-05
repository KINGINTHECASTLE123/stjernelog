import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

import observationsRouter from "./routers/observationsRouter.js";
app.use(observationsRouter);

import targetsRouter from "./routers/targetsRouter.js";
app.use(targetsRouter);

import forecastsRouter from "./routers/forecastsRouter.js";
app.use(forecastsRouter);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
    return;
  }
  console.log("Server is running on port", PORT);
});
