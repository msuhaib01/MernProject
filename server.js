const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3500;

app.use("/", express.static(path.join(__dirname, "/public")));
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
