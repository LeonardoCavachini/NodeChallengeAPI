const validateToken = require('../auth/validateToken');

const checkAuthorization = (req, res, next) => {
  const unauthorized = 401;
  const { authorization: token } = req.headers;
  const payload = validateToken(token);
  if (!token) return res.status(unauthorized).json({ message: 'Token not found' });
  if (!payload) return res.status(unauthorized).json({ message: 'Expired or invalid token' });
  if (payload.role !== 'admin') return res.status(unauthorized).json({ message: 'you need to be Administrador to do this.' });
  next();
};

module.exports = checkAuthorization;
