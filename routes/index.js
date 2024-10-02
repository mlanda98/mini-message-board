const express = require("express");
const router = express.Router();

router.get("/message/:id", async (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  try {
    const result = await req.pool.query("SELECT * FROM messages WHERE id = $1", [messageId]);
    const message = result.rows[0];

    if (message){
    res.render("message", {title: `Message from ${message.user}`, message});
    } else {
      res.status(404).send("Message not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching messages");
  }
});


module.exports = router;
