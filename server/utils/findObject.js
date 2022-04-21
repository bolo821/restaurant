/* eslint no-param-reassign: 0 */
const data = require('../data.json');

module.exports = type => {
  return (req, res, next, value) => {
    const typePlural = `${type}s`;
         valu=Number(value)
    var val= valu+1;
    
    const obj = data[typePlural].find(t => t.Id === (val)*1);
    
    if (obj) {
      req[type] = obj;
      next();
    } else {
      res.status(404).send(`Invalid ${type} ID`);
    }
  };
};
