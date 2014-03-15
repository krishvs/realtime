
var User = require('clayjs').db.User
module.exports.index = function(req, res){
  res.send('stupid ');
};

module.exports.new = function(req, res){
  res.send('new what');
};

module.exports.create = function(req, res){
	console.log(req.body);
	User.create({ username: req.body.username, password: req.body.password}).success(function(user) {
	  console.log('I have created a user');
	  res.render('forums/index');
	}).error(function(err){
		console.log('>>> There was an error in creating the user ');
		res.render('login/index');
	})

};

module.exports.show = function(req, res){
  res.send('show forum ' + req.params.forum);
};

module.exports.edit = function(req, res){
  res.send('edit forum ' + req.params.forum);
};

module.exports.update = function(req, res){
  res.send('update forum ' + req.params.forum);
};

module.exports.destroy = function(req, res){
  res.send('destroy forum ' + req.params.forum);
};

