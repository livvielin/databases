var db = require('../db');

module.exports = {
  messages: {
    get: function (res) {
      console.log('hi models messages get');
      db.query('SELECT * FROM messages', function(err, result) {
        if (err) console.error(err);
        console.log(result);
        res.send(result);
      });

      // db.connect();
    }, // a function which produces all the messages
    post: function (username, text, roomname) {
      console.log('hi post models messages');
      var input = {id: null, user: username, message: text, room: roomname};
      db.query('INSERT INTO messages SET ?', input, function(err, result) {
        if (err) console.error(err);
        console.log(result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (res) {
      console.log('hi get models users');
      db.query('SELECT * FROM users', function(err, result) {
        if (err) console.error(err);
        console.log(result);
        res.send(result);
      });
    },
    post: function (username) {
      console.log(username + ' is here');
      var input = {id: null, user: username};
      db.query('INSERT INTO users SET ?', input, function(err, result) {
        if (err) console.error(err);
        console.log(result.insertId);
      });
      // db.end();
    }
  }
};

