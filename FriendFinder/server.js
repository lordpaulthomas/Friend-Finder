const bodyParser = require("body-parser")
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require('./routing/apiRoutes.js')(app)

require('./routing/htmlRoutes.js')(app)







// const fullList = {};
var friendData = require('./app/data/friends.js');


app.post("/api/friends",(req,res) => {
  const newFriend = req.body;
  console.log("hello from server post")
  console.log(newFriend)
  friendData.push(newFriend)
  res.json(friendData)
})


app.listen(PORT, function(){
  console.log(`app listening on PORT ${PORT}`);
});