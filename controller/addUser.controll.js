
var mongoose = require('mongoose');


var Schema = mongoose.Schema;
// var mongoose = require('mongoose'),
var addUserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  Position: String,
  date: { 
      type: Date, 
      default: Date.now() 
    }
}, 
{collection: 'addUser'}
);
var addUser = mongoose.model('addUser', addUserSchema);




 

    exports.insert = function(req, res, next) {
        var  dateTime = new Date();
      var item = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Position: req.body.Position,
      // var  date = new Date();
      };

      var data = new addUser(item);
      data.save() 


      res.redirect('/show');
};


 exports.show = function(req, res, next) {
      addUser.find({}, function(err, response) {
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
        addUser.findByIdAndRemove(id).exec();
        console.log("delete ID")
        res.redirect('/show');
};

exports.showJson = function (req, res) {
addUser
.find()
.populate('File')
.sort({date: -1})
.exec(function (err, addUser) {
  if (err) return handleError(err);
  console.log('The creator is %s', addUser);
  // prints "The creator is Aaron"
  res.json(addUser);
});
}