import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";
import { dbType } from "./index";

class Avatar extends Model {
  public readonly id!: number;
  public avatarName!: string;
  public avatarUrl!: string;
  public readonly createdAt!: Date;
}

Avatar.init(
  {
    avatarName: {
      type: DataTypes.STRING,
      unique: true,
    },
    avatarUrl: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Avatar",
    tableName: "avatar",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export const associate = (db: dbType) => {};
export default Avatar;
