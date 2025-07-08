const express = require("express");
const fs = require("fs");
const users = require("./mock_data.json");
const { error } = require("console");
const app = express();
app.use(express.urlencoded({ extended: false }));

const port = 3000;

app.get("/api", (req, res) => {
  res.json(users);
});
app.post("/api/createuser", (req, res) => {
  users.push({ id: users.length + 1, ...req.body });
  fs.writeFile("./mock_data.json", JSON.stringify(users), (err) => {
    if (err) {
      return res.status(500).json({ error: "Faild to Create User" });
    } else {
      res.status(201).json(users);
    }
  });
});

app
  .route("/api/user/:id")
  .get((req, res) => {
    const userId = req.params.id;
    const user = users.find((user) => user.id == userId);
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    } else {
      
      res.status(200).json(user);
    }
  })
  .patch((req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex((user) => user.id == userId);
    if (!userIndex) {
      return res.status(404).json({ error: "User Not Found" });
    } else {
      newData = { ...users[userIndex], ...req.body };
      users[userIndex] = newData;
      fs.writeFile("./mock_data.json", JSON.stringify(users), () => {
        res.status(200).json(newData);
      });
    }
  })
  .delete((req, res) => {
    const userId = req.params.id;
    const index = users.findIndex((user) => user.id == userId);
    // res.send(index);
    if (index == -1) {
      return res.status(404).json({ error: "User Not Found" });
    } else {
      users.splice(index, 1);
      fs.writeFile("./mock_data.json", JSON.stringify(users), () => {
        res.status(200).json(users);
      });
    }
  });
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
