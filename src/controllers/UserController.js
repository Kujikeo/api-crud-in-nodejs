const User = require("../models/User");
module.exports = {
  async create(req, res) {
    /** pega os dados da requisição no corpo em json */
    const { email, name } = req.body;
    /** verifica se existe user, caso não ele cria. */
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { name: name, email: email },
    });
    /**a função acima retorna um boolean, caso seja verdadeiro,
     *  ele retorna mensagem de que já existe user */
    if (created) {
      return res.json(user);
    } else {
      return res.json({ message: "Email ja existente!" });
    }
    // const user = await User.create({ name, email });
    // return res.json(user);
  },
  async listar(req, res) {
    const user = await User.findAll();
    return res.json({ Users: user });
  },
};
