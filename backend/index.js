const express = require("express");
const path = require("path");
const cors = require("cors");

const userRouter = require("./Routes/userRoutes");

require("dotenv").config();

const app = express();

app.use(cors());

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Using Router
app.use("/api/v1/users", userRouter);

// START SERVER
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
