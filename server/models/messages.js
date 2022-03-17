var db = require('../db');

module.exports = {

  // a function which produces all the messages
  getAll: function (callback) {
    db.connection.query(
      'SELECT * FROM `messages`',
      function(err, results) {
        // console.log(JSON.stringify(results));
        if (err) {
          console.log('error in model running the getAll query');
        }
        console.log('succefully got all messages');
        callback(JSON.stringify(results));
      }
    );
  },

  // a function which can be used to insert a message into the database
  create: function (username, message, roomname) {
    db.connection.query(
      'INSERT INTO `messages` (username, message, roomname) VALUES(`${username}`, `${message}`, `${roomname}`)',
      function(err, results) {
        if (err) {
          console.log('error in model running the create query');
        }
        console.log('successfully posted to messages');
      }

    );
  }
};
