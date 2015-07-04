var express = require('express');
var bodyParser = require('body-parser');

var Pusher = require('pusher');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var pusher = new Pusher({ 
  appId: process.env.APP_ID, 
  key: process.env.APP_KEY, 
  secret:  process.env.APP_SECRET 
});

app.get("/pusher/auth", function(req, res) {
  var query = req.query;
  var socketId = query.socket_id;
  var channel = query.channel_name;
  var callback = query.callback;

  var presenceData = {
    user_id: req.query.user_id,
    user_info: {
      name: req.query.user_id
    }
  };

  console.log(presenceData);
  var auth = JSON.stringify(pusher.authenticate(socketId, channel, presenceData));
  var cb = callback.replace(/\"/g,"") + "(" + auth + ");";

  res.set({
    "Content-Type": "application/javascript"
  });

  res.send(cb);
});

var port = process.env.PORT || 5000;
app.listen(port);
