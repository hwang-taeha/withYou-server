import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";
import { dbType } from "./index";

class Video extends Model {
  public readonly id!: number;
  public title!: string;
  public thumbnail!: string;
  public runningTime!: string;
  public releaseDay!: string;
  public detail!: string;
  public url!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Video.init(
  {
    title: {
      type: DataTypes.STRING(100),
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    runningTime: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    releaseDay: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Video",
    tableName: "video",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
export const associate = (db: dbType) => {};

export default Video;
