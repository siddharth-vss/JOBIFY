let  jwt = require('jsonwebtoken');




// const authl = async (req, res, next) => {
//     console.log('authenticate user');
//     next();
//   };
  




const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res.status(400).send('Authentication invalid');
  }
  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.SECREATE);
    // console.log(payload)
    // attach the user request object
    console.log(payload.user._id);
    req.user = payload.user._id;
    // req.user = { userId: payload.userId };
    next();
  } catch (error) {
    res.status(400).send('Authentication invalid rr');
  }
};

  module.exports = {auth};