import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";
import { dbType } from "./index";

class Participant extends Model {
  public readonly id!: number;
  public userId!: number;
  public roomId!: number;
  public readonly createdAt!: Date;
}

Participant.init(
  {
    userId: {
      type: DataTypes.INTEGER,
    },
    roomId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Participant",
    tableName: "participant",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export const associate = (db: dbType) => {};
export default Participant;
