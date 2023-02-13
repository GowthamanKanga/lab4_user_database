const express = require('express');
const User = require('../model/users');
const router = express.Router();

router.post('/users', (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: 'User fields cannot be empty' });
  }

  const newUser = new User(req.body);
  newUser
    .save()
    .then(user => res.json({ message: 'User saved', user }))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
