const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const messages = req.app.locals.messages;
  res.render("index", {title: "Mini Message board", messages});
});

router.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  const message = req.app.locals.messages.find((msg) => msg.id === messageId);

  if (message) {
    res.render("message", { title: `Message from ${message.user}`, message });
  } else {
    res.status(404).send("Message not found");
  }
});
module.exports = router;
