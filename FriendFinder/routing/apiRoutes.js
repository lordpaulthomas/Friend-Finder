
var friendData = require('../app/data/friends.js');

module.exports = function (app) {
  app.get('/api/friends', function(req, res){
    console.log(friendData)
    res.json(friendData)
  })
}