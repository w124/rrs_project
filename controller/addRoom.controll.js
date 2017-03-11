
var mongoose = require('mongoose');


var Schema = mongoose.Schema;
// var mongoose = require('mongoose'),
var addRoomSchema = mongoose.Schema({
  Roomname: String,
  floor: String,
  member: String,
  //pic: String,
  detail: String,
  date: { 
      type: Date, 
      default: Date.now() 
    }
}, 
{collection: 'addRoom'}
);
var addRoom = mongoose.model('addRoom', addRoomSchema);




 

    exports.insert = function(req, res, next) {
        var  dateTime = new Date();
      var item = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Position: req.body.Position,
        floor: req.body.floor,
      // var  date = new Date();
      };

      var data = new addRoom(item);
      data.save() 


      res.redirect('/show');
};


 exports.show = function(req, res, next) {
      addRoom.find({}, function(err, response) {
        if (err) {
          return next(err);
        } else {
          
          res.render('showUser', {items: response});
        }
        console.log("show User");
      });

};



 exports.delete = function(req, res, next) {
      var id = req.body.id;
        addRoom.findByIdAndRemove(id).exec();
        console.log("delete ID")
        res.redirect('/show');
};

exports.showJson = function (req, res) {
addRoom
.find()
.populate('File')
.sort({date: -1})
.exec(function (err, addRoom) {
  if (err) return handleError(err);
  console.log('The creator is %s', addRoom);
  // prints "The creator is Aaron"
  res.json(addRoom);
});
}