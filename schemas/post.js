const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({  
  User: { 
    type: String, //type은 null, object, string 등 여러가지 type이 있다.
    required: true,  //required true는 무조건 값이 있어야 사용가능이다.
  },
  
  Password: { 
    type: Number, //type은 null, object, string 등 여러가지 type이 있다.
    required: true, //required true는 무조건 값이 있어야 사용가능이다.
  },
  title: { 
    type: String, //type은 null, object, string 등 여러가지 type이 있다.
  },
  content: { 
    type: String, //type은 null, object, string 등 여러가지 type이 있다.
  },

});

module.exports = mongoose.model("Post", postSchema);