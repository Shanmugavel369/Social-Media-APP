import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const  getLikes= (req,res)=>{
  
      const q = "SELECT userId FROM likes WHERE postId=?";

    db.query(q, [req.query.postId], (err, data) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error', details: err.message });
      }
      return res.status(200).json(data.map(like=>like.userId));
    });
};

export const addLike = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("not logged in!")
  
    jwt.verify(token,"secretkey",(err,userInfo)=>{
      if(err) return res.status(403).json("token is not valid!");
  
  
      const q = "INSERT INTO likes (`userId`, `postId`) VALUES (?)";
  
      const values=[
        userInfo.id,
        req.body.postId
      ]
  
    db.query(q, [values], (err, data) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error', details: err.message });
      }
      return res.status(200).json("post has been liked..");
    });
    });
  };

  export const deleteLike = (req, res) => {

    console.log("works");
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("not logged in!")
  
    jwt.verify(token,"secretkey",(err,userInfo)=>{
      if(err) return res.status(403).json("token is not valid!");
  
  
      const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";
  
  
    db.query(q, [userInfo.id,req.query.postId], (err, data) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error', details: err.message });
      }
      return res.status(200).json("Post has been disliked!");
    });
    });
  };  