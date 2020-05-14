const express = require("express");
const app = express();
const cors = require("cors");
const jsonParser = express.json();
const corsMiddleWare = cors();
const jokeRouter = require("./Jokes/router");
const userRouter = require("./User/routerSignup");
const authRouter = require("./Authorisation/routerLogin");

const port = process.env.PORT || 4000;

app.use(corsMiddleWare);
app.use(jsonParser);
app.use(jokeRouter);
app.use(userRouter);
app.use(authRouter);
app.listen(port, () => console.log(`Listening on port ${port}`));
