const UserModel = require('../model/UserModel')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")



const createUser= (req,res) =>{
  const {name, email, age, mobile, password} = req.body; 
  // console.log(req.body) 

  bcrypt.hash(password, 10)
  .then(hash => {
      UserModel.create({name, email, age, mobile, password:hash})
      .then(user => res.json(user))
      .catch(err => res.json(err))
  }).catch(err => console.log(err.message))
}
module.exports={
    createUser, }