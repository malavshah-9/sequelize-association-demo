import sequelize from "../service/sequelize";
import { Model, DataTypes } from "sequelize";

class Subject extends Model {}
Subject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    subject_name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    subject_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize.getConnection(),
    tableName: "Subjects",
    modelName: "subject",
  }
);
export default Subject;
