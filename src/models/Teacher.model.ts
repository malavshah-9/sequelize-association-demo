import sequelize from "../service/sequelize";
import classModel from "./Class.model";
import { Model, DataTypes } from "sequelize";

class Teacher extends Model {}
Teacher.init(
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
    tableName: "Teachers",
    modelName: "teacher",
  }
);

Teacher.belongsTo(classModel, {
  targetKey: "id",
});

export default Teacher;
