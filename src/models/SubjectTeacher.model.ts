import sequelize from "../service/sequelize";
import { Model, DataTypes } from "sequelize";

class SubjectTeacher extends Model {}
SubjectTeacher.init(
  {
    subjectId: {
      type: DataTypes.INTEGER,
    },
    teacherId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: sequelize.getConnection(),
    tableName: "SubjectTeacher",
    modelName: "subjectTeacher",
  }
);

export default SubjectTeacher;
