//It has two routes, one to log in a user, the other to get the logged in user (and get the token)

const express = require('express');
const { Router } = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
//@access   Private

router.get('/', (req, res) => {
  //The '/' pertains to api/users
  res.send('Get logged in user');
});

// @route   POST api/auth
// @desc    Auth user and get token
//@access   Public

router.post('/', (req, res) => {
  res.send('Login user');
});

module.exports = router;
