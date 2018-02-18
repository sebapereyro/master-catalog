// we are figuring where do we get the values
if (process.env.ENV === 'prod') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
