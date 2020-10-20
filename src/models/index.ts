import User, { associate as associateUser } from "./user";
import Avatar, { associate as associateAvatar } from "./avatar";
import Message, { associate as associateMessage } from "./message";
import Video, { associate as associateVideo } from "./video";
import Participant, { associate as associateParticipant } from "./participant";
import Room, { associate as associateRoom } from "./room";

export * from "./sequelize";
const db = {
  User,
  Avatar,
  Message,
  Video,
  Participant,
  Room,
};
export type dbType = typeof db;
associateUser(db);
associateAvatar(db);
associateMessage(db);
associateVideo(db);
associateParticipant(db);
associateRoom(db);
