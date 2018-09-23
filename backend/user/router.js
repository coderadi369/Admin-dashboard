const router =module.exports=require('express').Router()
const {DB}=require(`${__base}/utils/db`)
const {config}=require(`${__base}/utils/config`)

router.post('/register',(req,res)=>{
    let database=new DB()
    const {client:{mongodb}}=config
    Object.keys(req.body).forEach(function(key){
          if(key!='name' || key!='password' || key!='joined')
          	delete req.body[key]
    })
    database.connect(mongodb.defaultUri+'/'+mongodb.defaultDatabase).then(()=>{
          return database.insertDocuments('users',req.body)
    }).then(function(data){
    	 return res.status(200).json({'status':'success','message':'user inserted successfully'})
	}).catch(function(error){
		 console.log("eroor",error)
		 return res.status(500).json({'status':'error','message':'some error occured while inserting into db'})
	})

})

router.get('/',(req,res)=>{
	res.status(200).json({'user':'profile'})
})
