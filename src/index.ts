import express from "express";
import cors from "cors";
import { sequelize } from "./models";
import Room from "./models/room";

const app = express();
const prod = process.env.NODE_ENV === "production";
app.set("port", prod ? process.env.PORT : 3065);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db연결 성공");
  })
  .catch((err: Error) => {
    console.log(err);
  });
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.get("/", async (req, res, next) => {
  const test = await Room.findAll();

  console.log(test);

  res.send("send get");
});
app.get("/test", async (req, res, next) => {
  await Room.create({
    roomname: "taeha",
  });
  const test = await Room.findAll();
  console.log(test);
});

app.listen(app.get("port"), () => {
  console.log(`server is running on ${app.get("port")}`);
});
