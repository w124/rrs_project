var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
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



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  addUser.find()
      .then(function(doc) {
        res.render('home', {items: doc});
      });
});

router.post('/testinsert', function(req, res, next) {
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


      res.redirect('/home');
};


// router.post('/update', function(req, res, next) {
//   var id = req.body.id;

//   UserData.findById(id, function(err, doc) {
//     if (err) {
//       console.error('error, no entry found');
//     }
//     doc.title = req.body.title;
//     doc.content = req.body.content;
//     doc.author = req.body.author;
//     doc.save();
//   })
//   res.redirect('/');
// });

// router.post('/delete', function(req, res, next) {
//   var id = req.body.id;
//   addUser.findByIdAndRemove(id).exec();
//   res.redirect('/');
// });

module.exports = router;
