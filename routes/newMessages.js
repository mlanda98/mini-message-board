const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
  const {user, message } = req.body;
  console.log(req.body);
  try {
    const query = 'INSERT INTO messages ("user", text, added) VALUES ($1, $2, $3)';
    await req.pool.query(query, [user, message, new Date()]);
    res.redirect("/");
  } catch (err){
    console.error(err);
    res.status(500).send("Error adding message");
  }
})

router.get('/', (req, res) => {
  res.render("new");
})



module.exports = router;