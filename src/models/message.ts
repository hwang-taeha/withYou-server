import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";
import { dbType } from "./index";

class Message extends Model {
  public readonly id!: number;
  public text!: string;
  public caption!: string;
  public readonly createdAt!: Date;
  public user!: string;
  public room!: string;
}

Message.init(
  {
    text: {
      type: DataTypes.STRING,
    },
    caption: {
      type: DataTypes.STRING,
    },
    user: {
      type: DataTypes.STRING,
    },
    room: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Message",
    tableName: "message",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export const associate = (db: dbType) => {};

export default Message;
