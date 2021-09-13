const Users = require('../db/models/users');

const BAD_REQUEST = 400;
const CONFLICT = 409;

const checkUser = async (req, res, next) => {
  const {  email } = req.body;

  if (!email) return res.status(BAD_REQUEST).json({ message: '"email" is required' });
  
  const checkEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);

  const userEmail = await Users.query()
  .select('email')
  .where('email', email)
  
  if (userEmail[0]) return res.status(CONFLICT).json({ message: 'user already exists' });
  if (checkEmail === false) return res.status(BAD_REQUEST).json({ message: '"email" must be a valid email' });
  next();
};

module.exports = checkUser;