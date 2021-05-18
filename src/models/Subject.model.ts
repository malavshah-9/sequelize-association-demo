import sequelize from "../service/sequelize";
import TeacherModel from "./Teacher.model";
import SubjectTeacher from "./SubjectTeacher.model";
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
TeacherModel.hasMany(Subject);
Subject.belongsToMany(TeacherModel, {
  through: {
    model: SubjectTeacher,
    unique: true,
  },
});
export default Subject;
