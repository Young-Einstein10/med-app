const jwt = require('jsonwebtoken');
const { config } = require('dotenv');
const models =  require('../models');

const { User } = models;

config();

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ error: 'Unauthorized' });
  }

  const token = req.headers.authorization.split(' ')[1];
  return jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '24h' }, (error, decoded) => {
    if (error) {
      return res.status(401).send({ error });
    }
    req.userId = decoded.id;
    next()
    // return User.findByPk(decoded.id)
    //   .then((user) => {
    //     if (!user) {
    //       return res.status(401).send({ error: 'User does not exist' });
    //     }
    //     return next();
    //   });
  });
};
