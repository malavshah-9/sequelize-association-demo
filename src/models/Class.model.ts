import sequelize from "../service/sequelize";
import Teacher from "./Teacher.model";
import { Model, DataTypes } from "sequelize";

class Class extends Model {}
Class.init(
  {
    room_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    building_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelize.getConnection(),
    tableName: "Classes",
    modelName: "class",
  }
);

export default Class;
