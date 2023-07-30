const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({  
  
    commentId:{
    type: Number,
  },

  User: { 
    type: String, //type은 null, object, string 등 여러가지 type이 있다.

  },

  Password: { 
    type: Number, //type은 null, object, string 등 여러가지 type이 있다.

  },
  content: { 
    type: String, //type은 null, object, string 등 여러가지 type이 있다.
  },

});

module.exports = mongoose.model("Comment", commentSchema);