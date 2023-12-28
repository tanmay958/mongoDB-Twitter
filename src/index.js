const express = require("express");
const connect = require("./config/database");
const Tweet = require("./models/tweet");
// Use require for CommonJS module
const Comment = require("./models/comment");
const app = express();
const PORT = 3001;

app.listen(PORT, async () => {
  console.log("server started");
  await connect();
  console.log("mongo db connected");
  // const tweet = await Tweet.create({
  //   content: "third Tweet ",
  //   userEmail: "with email",
  // });
  // const tweet = await Tweet.updateMany(
  //   { userEmail: "A@B.com " },
  //   { $set: { userEmail: "tanmay" } }
  // );
  // console.log(tweet);
  // const result = await Tweet.find({ userEmail: "tanmay" });
  // console.log(result);
  // const tweet = await Tweet.find({ userEmail: "with email" });
  // tweet[0].comments.push("hye first comment");
  // tweet[0].save();
  // console.log(tweet);
  // const tweet = await Tweet.create({
  //   content: "fifth Tweet ",
  //   userEmail: "tanmay",
  // });
  // const newComment = {
  //   content: "hello tanamt",
  // };
  // tweet.comments.push(newComment);
  // await tweet.save();
  // console.log(tweet);
  // const tweet = await Tweet.create({
  //   content: "comment with scehma",
  //   userEmail: "tanmay",
  // });
  // const comment = await Comment.create({ content: "new comment" });
  // tweet.comments.push(comment);
  // await tweet.save();
  // console.log(tweet);
  const tweet = await Tweet.findById("658d628f6aef234eca127671").populate(
    "comments"
  );
  console.log(tweet);
});
