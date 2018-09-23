const router =module.exports=require('express').Router()
const UserModel=require(`${__base}/user/UserModel`)
const cors = require('cors')

var corsOptions = {
  credentials: true
}

router.use((req, res, next) => {
  corsOptions['origin'] = req.get('origin')
  next()
}, cors(corsOptions))

router.post('/register',(req,res)=>{
  UserModel.registerUser(req,res)
})

router.post('/login',(req,res)=>{
  UserModel.loginUser(req,res)
})

router.get('/',(req,res)=>{
	res.status(200).json({'user':'profile'})
})
