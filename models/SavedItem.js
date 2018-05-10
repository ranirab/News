var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var SavedItemSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  articles: [{
    type: Schema.Types.ObjectId,
    ref: "Article"
  }]
});

// This creates our model from the above schema, using mongoose's model method
var SavedItem = mongoose.model("SavedItem", SavedItemSchema);

// Export the Article model
module.exports = SavedItem;
