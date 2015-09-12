var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      console.log('hi model get');
      db.connect();
    }, // a function which produces all the messages
    post: function (username, text, roomname) {
      console.log('hi model post');
      var input = {id: null, user: username, message: text, room: roomname};
      db.query('INSERT INTO messages SET ?', input, function(err, result) {
        if (err) console.error(err);
        console.log(result.insertId);
      });
      db.query('SELECT * FROM messages', function(err, result) {
        if (err) console.error(err);
        console.log(result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      console.log(username + ' is here');
      var input = {id: null, user: username};
      db.query('INSERT INTO users SET ?', input, function(err, result) {
        if (err) console.error(err);
        console.log(result.insertId);
      });
      db.query('SELECT * FROM users', function(err, result) {
        if (err) console.error(err);
        console.log(result);
      });
      // db.end();
    }
  }
};

