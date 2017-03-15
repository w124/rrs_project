
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




 

    exports.insertR = function(req, res, next) {
        var  dateTime = new Date();
      var item = {

        Roomname: req.body.Roomname,
        floor: req.body.floor,
        member: req.body.member,
        detail: req.body.detail,
      // var  date = new Date();
      };

      var data = new addRoom(item);
      data.save() 


      res.redirect('/showRoom');
};


 exports.showR = function(req, res, next) {
      addRoom.find({}, function(err, response) {
        if (err) {
          return next(err);
        } else {
          
          res.render('showRoom', {items: response});
        }
        console.log("show User");
      });

};



 exports.deleteR = function(req, res, next) {
      var id = req.body.id;
        addRoom.findByIdAndRemove(id).exec();
        console.log("delete ID")
        res.redirect('/showRoom');
};

exports.showJsonR = function (req, res) {
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