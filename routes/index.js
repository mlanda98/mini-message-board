const express = require("express");
const router = express.Router();

const messages = [
  { id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  { id:2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", {title: "Mini Messageboard", messages});
});

router.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  const message = messages.find((msg) => msg.id === messageId);

  if (message) {
    res.render("message", { title: `Message from ${message.user}`, message });
  } else {
    res.status(404).send("Message not found");
  }
});
module.exports = router;
