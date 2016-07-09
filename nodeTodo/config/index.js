var configValues = require('./config');

//exporting the connection 
module.exports = {

  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds011705.mlab.com:11705/nodetodosimon';
  }

}