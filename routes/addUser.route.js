var user = require('../controller/addUser.controll');


module.exports = function (app) {
  app.route('/insert')
    .post(user.insert);

app.route('/show')
	.get(user.show);
	
 app.route('/delete')
     .post(user.delete);

app.route('/showJson')
     .get(user.showJson);    

app.route('/insertR')
    .post(user.insertR);

app.route('/showR')
	.get(user.showR);
	
 app.route('/deleteR')
     .post(user.deleteR);

app.route('/showJsonR')
     .get(user.showJsonR);


};