const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //Get token from the header
  const token = req.header('x-auth-token');

  //Check if the token exists
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret')); //once token is verified, the payload is put into decoded
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
   