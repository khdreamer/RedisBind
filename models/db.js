var redis = require("redis")
  , client = redis.createClient()
  , async = require("async")
  , socketHandler = require('../controllers/socket-io/socket.js');


client.on("error", function (err) {
  console.log("Error " + err);
});

exports.all = function(){

  client.llen("history", function(err, length){ // get length

    client.lrange("history", 0, length, function(err, list){ // get list content
      
      socketHandler.update(list);
      // socket.emit("history", list);
      
    });

  });

}

exports.create = function(msg){

  console.log("create");
  client.rpush("history", [msg], function(err, num){ 

    socketHandler.update(msg);
      
  });
    
}

// exports.update = function(req, res){}


// exports.destroy = function(req, res){



// }

// exports.show = function(req, res){



// }
