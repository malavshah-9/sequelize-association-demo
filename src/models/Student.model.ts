import sequelize from "../service/sequelize";
import { Model, DataTypes } from "sequelize";

class Student extends Model {}
Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    sequelize: sequelize.getConnection(),
    tableName: "Students",
    modelName: "student",
  }
);
export default Student;
