module.exports = {
  /**Configurações necessárias do banco */
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "admin",
  database: 'sequelizeestudo',
  define: {
    /** entende que toda tabela do banco possui um campo de auditoria */
    /**create_at, update_at */
    timestamps: true,
    /**define o formato das colunas em   snake case */
    underscored: true,

  },
}