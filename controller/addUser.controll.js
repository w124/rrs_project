
var mongoose = require('mongoose');

/////////////////////////////////// Admin Account ///////////////////////////////////////////////
var Schema = mongoose.Schema;
// var mongoose = require('mongoose'),
var addUserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  Position: String,
  floor: String,
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
        floor: req.body.floor,
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


///////////////////////////////////////Room///////////////////////////////
var addRoomSchema = mongoose.Schema({
  Roomname: String,
  floor: String,
  member: String,
  //pic: String,
  detail: String,
  Support : String,
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
        Support: req.body.Support,

      // var  date = new Date();
      };

      var data = new addRoom(item);
      data.save() 
      res.redirect('/showR');
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
        res.redirect('/addRoom');
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






///////////////////////User Login ////////////////////////////////////////

var SUserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  SID: String,
  date: { 
      type: Date, 
      default: Date.now() 
    }
}, 
{collection: 'SUser'}
);
var SUser = mongoose.model('SUser', SUserSchema);

 exports.insertUser = function(req, res, next) {
        var  dateTime = new Date();
      var item = {

        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        SID: req.body.SID,
      // var  date = new Date();
      };

      var data = new SUser(item);
      data.save() 
      res.redirect('/showSU');
};


 exports.showUser = function(req, res, next) {
      SUser.find({}, function(err, response) {
        if (err) {
          return next(err);
        } else {
          
          res.render('showRoom', {items: response});
        }
        console.log("show User");
      });

};



 exports.deleteUser = function(req, res, next) {
      var id = req.body.id;
        SUser.findByIdAndRemove(id).exec();
        console.log("delete ID")
        res.redirect('/SUser');
};

exports.showJsonUser = function (req, res) {
SUser
.find()
.populate('File')
.sort({date: -1})
.exec(function (err, SUser) {
  if (err) return handleError(err);
  console.log('The creator is %s', SUser);
  // prints "The creator is Aaron"
  res.json(SUser);
});
}

//////////////////////BlackList////////////////////////////////////

/*var BlackListSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  SID: String,
  date: { 
      type: Date, 
      default: Date.now() 
    }
}, 
{collection: 'SUser'}
);
var SUser = mongoose.model('SUser', BlackListSchema);

 exports.insertUser = function(req, res, next) {
        var  dateTime = new Date();
      var item = {

        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        SID: req.body.SID,
      // var  date = new Date();
      };

      var data = new SUser(item);
      data.save() 
      res.redirect('/showR');
};


 exports.showR = function(req, res, next) {
      SUser.find({}, function(err, response) {
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
        SUser.findByIdAndRemove(id).exec();
        console.log("delete ID")
        res.redirect('/SUser');
};

exports.showJsonR = function (req, res) {
SUser
.find()
.populate('File')
.sort({date: -1})
.exec(function (err, SUser) {
  if (err) return handleError(err);
  console.log('The creator is %s', SUser);
  // prints "The creator is Aaron"
  res.json(SUser);
});
}*/