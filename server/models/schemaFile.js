var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DbSchema   = new Schema({
	From: String,Subject: String,date:String
});

module.exports = mongoose.model('gmailCollection', DbSchema);
