const express = require("express");
const router = express.Router();
import student from "../models/Student.model";

router.get("/student", async (req, res, next) => {
  await student.create({
    first_name: "Demo",
    last_name: "Shah",
    class_id: 1,
  });
  res.status(200).send("Hello world");
});

export default router;
