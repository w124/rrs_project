var user = require('../controller/addUser.controll');

module.exports = function (app) {
  app.route('/insert')
    .post(user.insert);

app.route('/show')
	.post(user.show);
	
 app.route('/delete')
     .post(user.delete);    
};