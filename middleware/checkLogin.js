const Users = require('../db/models/users');

const BAD_REQUEST = 400;

const checkLogin = async (req, res, next) => {
  const dataUser = req.body;
  if (!dataUser.email) return res.status(BAD_REQUEST).json({ message: '"email" is required' });
  if (!dataUser.name) return res.status(BAD_REQUEST).json({ message: '"name" is required' });

  const userEmail = await Users.query()
  .select('name', 'email', 'role')
  .where('name', '=', dataUser.name)
  .where('email', '=', dataUser.email)
  .where('role', '=', dataUser.role)

  if (userEmail.length < 1) return res.status(BAD_REQUEST).json({ message: 'Campos inválidos' });

  const { name, email, role } = userEmail[0];
  
  req.payload = { name, email, role };
  next();
};

module.exports = checkLogin;
