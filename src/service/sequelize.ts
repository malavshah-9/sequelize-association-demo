import { Sequelize } from "sequelize";

class DBConnection {
  dbConnection: Sequelize;
  constructor() {
    this.dbConnection = new Sequelize({
      host: "localhost",
      database: "SchoolDatabase",
      username: "root",
      password: "1234",
      dialect: "mysql",
    });
    this.dbConnection
      .sync({
        force: true,
      })
      .then((data) => {
        console.log(" Synchronized ", data);
      })
      .catch((e) => {
        console.log(" error ", e);
      });
  }
  getConnection() {
    return this.dbConnection;
  }
}
export default new DBConnection();
