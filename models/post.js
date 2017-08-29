//Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    user: {
	type: mongoose.Schema.Types.ObjectId, ref:'User',
    },
    postBody: {
	type: String,
	default: ''
    },
    imageUrl: {
	type: String,
	default: ''
    },
    location: {
	type: {
	    type: String,
	    default: 'Point'
	},
	coordinates: [Number]
    },
    likesCount: {
        type: Number,
        default: 0
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        default: []
    }]
});

PostSchema.index({ location : '2dsphere' });

module.exports = mongoose.model('Post', PostSchema);
