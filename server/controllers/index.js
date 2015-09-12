var models = require('../models');
var request = require('../request-handler');
// var utils = require('../utils');

module.exports = {
  messages: {
    get: function (req, res, callback) {
      console.log('hi controller messages get');
      callback(models.messages.get(res));
    }, // a function which handles a get request for all messages
    post: function (req, res, callback) {
      console.log('hi controller messages post');
      callback(models.messages.post(req.body.username, req.body.message, req.body.roomname));
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res, callback) {
      console.log('hi controller users get');
      callback(models.users.get(res));
    },
    post: function (req, res, callback) {
      console.log('hi controller users post');
      callback(models.users.post(req.body.username));
      // exports.messages.post(req, res);
    }
  }
};

