//Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
    postedBy: {
	type: mongoose.Schema.Types.ObjectId, ref:'User',
    },
    timeStamp: {
	type: Date,
	default: Date.now
    },
    messageBody: {
	type: String,
	default: ''
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
