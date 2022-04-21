const data = require('../../data.json');

module.exports = (req, res) => {
  const restaurant = data.restaurant;

  res.status(200).json({restaurant });
};
