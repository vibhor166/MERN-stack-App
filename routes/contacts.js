const express = require('express');
const { Router } = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all contacts of a logged in user
//@access   Private
router.get('/', (req, res) => {
  //The '/' pertains to api/users
  res.send('Get all contacts of a logged in user');
});

// @route   POST api/contacts
// @desc    Add a new contact
//@access   Private
router.post('/', (req, res) => {
  //The '/' pertains to api/users
  res.send('Add a new contact');
});

// @route   PUT api/contacts/:id
// @desc    Update contact
//@access   Private
router.put('/:id', (req, res) => {
  //The '/' pertains to api/users
  res.send('Update contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
//@access   Private
router.delete('/:id', (req, res) => {
  //The '/' pertains to api/users
  res.send('Delete contact');
});

module.exports = router;
