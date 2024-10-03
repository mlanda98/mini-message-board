const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await req.pool.query(
      "SELECT * FROM messages ORDER BY added DESC");
    const messages = result.rows;
      res.render("index", { title: "Mini Message Board", messages });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching messages");
  }
});

module.exports = router;
