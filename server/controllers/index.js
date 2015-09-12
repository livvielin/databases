var models = require('../models');
var request = require('../request-handler');
// var utils = require('../utils');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('hi get message');
    }, // a function which handles a get request for all messages
    post: function (req, res, callback) {
      console.log('hi post message');
      callback(models.messages.post(req.body.username, req.body.message, req.body.roomname));
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('hi get users');
    },
    post: function (req, res, callback) {
      console.log('hi post user');
      callback(models.users.post(req.body.username));
      // exports.messages.post(req, res);
    }
  }
};

