const express = require("express");
const router = express.Router();
const messages = require('./index').messages;

router.post('/',(req, res) => {
  const {user, message } = req.body;
  const newMessage = {
    id: messages.length + 1,
    user, 
    text: message,
    added: new Date()
  }

  messages.push(newMessage);
  res.redirect('/');
})

router.get('/', (req, res) => {
  res.render("new");
})

module.exports = router;