const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({  
  postId:{
    type: Number,
    required: true,
    unique: true
  },

  User: { 
    type: String, //type은 null, object, string 등 여러가지 type이 있다.

  },

  Password: { 
    type: Number, //type은 null, object, string 등 여러가지 type이 있다.

  },
  title: { 
    type: String, //type은 null, object, string 등 여러가지 type이 있다.
  },
  content: { 
    type: String, //type은 null, object, string 등 여러가지 type이 있다.
  },

});

module.exports = mongoose.model("Post", postSchema);