const express = require("express");
const app = express();
const PORT = 3000;
const comments = require("./Routes/comments")
const cors = require("cors")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", comments)

app.listen(3000, () => {
    console.log(`corriendo en port ${PORT}`);
  });



module.exports = app;