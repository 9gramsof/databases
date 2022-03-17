var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('hello i am a controller');
    //response.writeHead(statusCode[, statusMessage][, headers]);
    // res.writeHead(200);
    // models.messages.getAll(function(results) {
    //   console.log('get request successfull in controller');
    // });
    // res.end(JSON.stringify(results));
    res.end();
  }, // a function which handles a get request for all messages
  post: function (req, res) {

    console.log(req.body);

    // let username = req.
    // let message = req.
    // let roomname = req.


    // models.messages.create(username, message, roomname);
    res.end();
    console.log('post request successfull in controller');
  } // a function which handles posting a message to the database
};
