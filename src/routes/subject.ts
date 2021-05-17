const express = require("express");
const router = express.Router();
import subject from "../models/Subject.model";

router.get("/subject", async (req, res, next) => {
  res.status(200).send("Hello world");
});

export default router;
