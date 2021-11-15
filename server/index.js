const express = require("express");
const db = require("../server/db")();

const usersController = require("./controller/users")();

const hostname = "0.0.0.0";
const port = process.env.PORT || 3000;

const app = (module.exports = express());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static("static"));
//get all user
app.get("/api/users", usersController.getController);
//add an user
app.post("/api/users", usersController.postController);
// an users
app.get("/api/users/:id", usersController.getById);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.use((req, res) => {
  res.status(404).json({
    error: 404,
    message: "Route not found",
  });
});
