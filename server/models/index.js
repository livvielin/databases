var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.connect();
    }, // a function which produces all the messages
    post: function () {
      db.connect();
      db.query('INSERT INTO `messages` VALUES (');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

