let router =module.exports=require('express').Router()

router.get('/',(req,res)=>{
	res.status(200).json({'user':'profile'})
})
