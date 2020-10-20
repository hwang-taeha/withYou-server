import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";
import { dbType } from "./index";

class Room extends Model {
  public readonly id!: number;
  public roomname!: string;
  public readonly createdAt!: Date;
}

Room.init(
  {
    roomname: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Room",
    tableName: "room",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export const associate = (db: dbType) => {};
export default Room;
