// /routes/posts.js
const express = require("express");

const router = express.Router();




//전체 개시글 목록 조회 API
router.get("/posts", (req,res) => {
    res.json({posts: posts});
  });

//게시글 작성 API

//게시글 조회 API

//게시글 수정 API

//게시글 삭제 API

//댓글 목록 조회 API

//댓글 작성 API

//댓글 수정 API

//댓글 삭제 API


module.exports = router;