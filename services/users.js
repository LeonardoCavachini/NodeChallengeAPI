const Users = require('../db/models/users');
const createToken = require('../auth/createToken');

const SUCCESS = 200;
const CREATED = 201;
const NOT_FOUND = 404;
const CONFLICT = 409;

const createUser = async (req, res) => {
  const { name, email, role } = req.body;
  await Users.query().insert({ name, email, role })
  return res.status(CREATED).json({ message: 'user was created' });
};

const userLogin = async (req, res) => {
  const { name, email, role } = req.payload;
  const token = await createToken({ name, email, role });
  res.status(SUCCESS).json({ token });
}

module.exports = {
  createUser,
  userLogin
}
