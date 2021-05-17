import sequelize from "../service/sequelize";
import Teacher from "./Teacher.model";
import { Model, DataTypes } from "sequelize";

class Class extends Model {}
Class.init(
  {
    room_number: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    building_code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelize.getConnection(),
    tableName: "Classes",
    modelName: "class",
  }
);
Class.hasOne(Teacher, {
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
  foreignKey: "teacherId",
});
export default Class;
