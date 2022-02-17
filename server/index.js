const debug = require("debug")("demo-mongo:server");
const express = require("express");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/errors");
const perretesRouter = require("./routers/perretesRouter");
const gatetesRouter = require("./routers/gatetesRouter");

const app = express();

const levantaElFoquinServidor = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening on http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error) => {
      const errorMessage = `Couldn't start the server.${
        error.code === "EADDRINUSE" ? ` Port ${port} busy` : ""
      }`;
      reject(new Error(errorMessage));
    });
  });

app.use(morgan("dev"));
app.use(express.json());

app.use("/perretes", perretesRouter);
app.use("/gatetes", gatetesRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = levantaElFoquinServidor;
