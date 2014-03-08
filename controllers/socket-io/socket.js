var db = require("../../models/db.js")
  , redis = require("redis");

module.exports = function(io){

  this.connect = function(socket){

    console.log("connection");

    // return all history meassages
    db.all(function(list){
      this.all(socket, list);
    });

    // listen to new message
    socket.on('message', function (msg) {
      db.create(msg, function(){

        this.update([msg]);

      });
    });

  };

  this.update = function(msg){

    io.sockets.emit('new', msg);

  };

  this.all = function(socket, data){

    socket.emit('history', data);

  };

  return this;

}



