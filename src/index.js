const express = require("express");
require("./db/mongoose");

const athleteRouter = require("./routers/athlete");
const saleRouter = require("./routers/sale");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(athleteRouter);
app.use(saleRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
