require('dotenv').config()
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET

const validateToken = (token) => {
  const check = jwt.decode(token, secret);
  return check;
};

module.exports = validateToken;
