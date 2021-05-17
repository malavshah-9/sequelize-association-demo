const express = require("express");
const dotenv = require("dotenv");

import student from "./routes/students";
import teacher from "./routes/teacher";
import classRouter from "./routes/class";
import subject from "./routes/subject";

dotenv.config({
  encoding: "utf-8",
});

const app = express();

app.use(student);
app.use(teacher);
app.use(classRouter);
app.use(subject);
const server = app.listen(process.env.PORT, () => {
  console.log(` server has been started at port ${process.env.PORT}`);
});
