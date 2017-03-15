
var room = require('../controller/addRoom.controll');

module.exports = function (app) {
  app.route('/insertRoom')
    .post(room.insertR);

app.route('/showR')
	.get(room.showR);
	
 app.route('/deleteR')
     .post(room.deleteR);

app.route('/showJsonR')
     .get(user.showJsonR);    
};