const express = require("express");
const router = express.Router();
import subject from "../models/Subject.model";

router.get("/subject", async (req, res, next) => {
  subject.create({
    subject_name: "Maths",
    subject_description: "Maths subject",
  });
  res.status(200).send("Hello world");
});

export default router;
