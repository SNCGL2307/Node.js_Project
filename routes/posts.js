// /routes/posts.js
const express = require("express");

const router = express.Router();

const Post = require("../shemas/post.js");

//전체 개시글 목록 조회 API
router.get("/posts", (req,res) => {
    res.json({posts: posts});
  });

//게시글 작성 API
const Post = require("../schemas/post.js");
router.post("/posts", async (req,res) => {
  const {postId, User, Password, title, content} = req.body;

  const posts = await Post.find({postId});
  if(posts.length){
    return res.status(400).json({
      message: "데이터 형식이 올바르지 않습니다."
    })
  }

  const createposts = await Post({postId, User, Password, title, content});

  res.json({message: "게시글을 생성하였습니다."})
})

//게시글 조회 API
router.get("/posts/:postId", async (req, res) => {
  const {postId} = req.params;
  const post = await Post.find({postId});

  if(post.length){
    return res.status(400).json({errorMessage: "게시글 조회에 실패했습니다."});
  };

  res.json({ post });

})

//게시글 수정 API

//게시글 삭제 API




module.exports = router;