const express = require("express");
const router = express.Router();
import student from "../models/Student.model";

router.get("/student", async (req, res, next) => {
  res.status(200).send("Hello world");
});

export default router;
