const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.render("new");
});

router.post('/',(req, res) => {
  const {user, message } = req.body;
  const messages = req.app.locals.messages;

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
  res.render("new", {title: "Add a New Message"});
})



module.exports = router;