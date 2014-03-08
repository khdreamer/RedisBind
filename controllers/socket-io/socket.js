var db = require("../../models/db.js")
  , redis = require("redis");

var socket;

exports.connect = function(s){

  console.log("connection");

  socket = s;
  db.all();

  // listen to new message
  socket.on('message', function (data) {
    db.create(data);
  });

};

exports.update = function(data){

  socket.emit("history", data);

}



