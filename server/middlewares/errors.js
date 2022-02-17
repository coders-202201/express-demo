const debug = require("debug")("demo-mongo:server:middlewares:errors");

const notFoundError = (req, res) => {
  res.status(404);
  res.json({ error: "Not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug("Ha petado todo");
  res.status(500);
  res.json({ error: "Fuá la que se ha liado" });
};

module.exports = {
  notFoundError,
  generalError,
};
