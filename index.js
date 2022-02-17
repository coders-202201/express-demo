require("dotenv").config();
const debug = require("debug")("demo-mongo:root");
const connectToFoquinDataBase = require("./db");
const levantaElFoquinServidor = require("./server");

const port = process.env.SERVER_PORT || 4000;
const mongoConnection = process.env.MONGO_STRING;

(async () => {
  try {
    // paso 1: conectarse a la BD
    await connectToFoquinDataBase(mongoConnection);

    // paso 2: levantar un servidor
    await levantaElFoquinServidor(port);

    // paso 3: hacer cosetes
    debug("Estic fent cosetes");
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
