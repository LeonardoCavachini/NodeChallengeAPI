const validateToken = require('../auth/validateToken');

const articlescheckAuth = (req, res, next) => {
  const unauthorized = 401;
  const { authorization: token } = req.headers;
  const payload = validateToken(token);
  req.payload = payload
  next();
};

module.exports = articlescheckAuth;
