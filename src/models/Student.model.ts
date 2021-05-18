import sequelize from "../service/sequelize";
import { Model, DataTypes } from "sequelize";
import classModel from "./Class.model";

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
Student.belongsTo(classModel, {
  targetKey: "id",
  foreignKey: {
    name: "ClassesId",
  },
});
classModel.hasMany(Student, {
  sourceKey: "id",
});
export default Student;
