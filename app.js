const express = require('express');
const app = express();
const port = 3000;

const commentsRouter = require('./routes/comments.js');
const postsRouter = require('./routes/posts.js');
const connect = require("./schemas"); // index.js는 폴더를 불러와도 바로 사용가능해서 생략
connect();



app.use(express.json()); // body에 데이터가 들어갔을때 사용하게 해주는 Middleware이다.
app.use("/api", [commentsRouter, postsRouter]); // localhost:3000/api -> commentsRouter, postsRouter

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});