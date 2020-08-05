const express = require('express');
const { Router } = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    Register a user
//@access   Public
router.post('/', (req, res) => {
  //The '/' pertains to api/users
  res.send('Registers a user');
});

module.exports = router;
