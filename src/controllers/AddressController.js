const Addres = require("../models/Address");
const User = require("../models/User");
module.exports = {
  async create(req, res) {
    const { user_id } = req.params;
    const { street, number, zipcode } = req.body;
    const user = await User.findByPk(user_id);
    if (user) {
      const addres = await Addres.create({ user_id, street, number, zipcode });
      return res.json(addres);
    } else {
      return res.json({ messsage: "Erro! não existe esse usuário." });
    }
  },
};
