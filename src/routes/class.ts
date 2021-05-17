const express = require("express");
const router = express.Router();
import classORM from "../models/Class.model";

router.get("/class", async (req, res, next) => {
  await classORM.create({
    room_number: 1,
    building_code: 1,
  });
  res.status(200).send("Hello world");
});

export default router;
