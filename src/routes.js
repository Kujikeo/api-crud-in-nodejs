const express = require("express");
const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");
const routes = express.Router();

/** rota pra criar usuario */
routes.post("/users", UserController.create);
/** rota pra listar usuario */
routes.get("/listar", UserController.listar);

routes.post("/users/:user_id/addresses", AddressController.create);

module.exports = routes;
