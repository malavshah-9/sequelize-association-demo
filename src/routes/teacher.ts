const express = require("express");
const router = express.Router();
import Teacher from "../models/Teacher.model";

router.get("/teacher", async (req, res, next) => {
  await Teacher.create({
    first_name: "Temp",
    last_name: "Demo",
  });
  res.status(200).send("Hello world");
});

export default router;
