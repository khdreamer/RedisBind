var redis = require("redis")
  , client = redis.createClient();

client.on("error", function (err) {
  console.log("Error " + err);
});

exports.all = function(callback){

  client.llen("history", function(err, length){ // get length

    client.lrange("history", 0, length, function(err, list){ // get list content
      
      if(callback) callback(list);
      
    });

  });

}

exports.create = function(msg, callback){

  console.log("create");
  client.rpush("history", [msg], function(err, num){ 

    callback();
      
  });
    
}
