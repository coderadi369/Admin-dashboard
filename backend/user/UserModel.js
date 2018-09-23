const {DB}=require(`${__base}/utils/db`)
const {config}=require(`${__base}/utils/config`)

function registerUser(req,res){
	let database=new DB()
    const {client:{mongodb}}=config
    database.connect(mongodb.defaultUri+'/'+mongodb.defaultDatabase).then(()=>{
          return database.insertDocuments('users',req.body)
    }).then(function(data){
    	 return res.status(200).json({'status':'success','message':'user inserted successfully'})
	}).catch(function(error){
		 console.log("eroor",error)
		 return res.status(500).json({'status':'error','message':'some error occured while inserting into db'})
	})
}


function loginUser(req,res){
	let database=new DB()
	const {client:{mongodb}}=config
	database.connect(mongodb.defaultUri+'/'+mongodb.defaultDatabase).then(()=>{
		return database.findDocuments('users',req.body)
	}).then(function(data){
		return res.status(200).json({'status':'success','message':'user logged in successfully'})
	}).catch(function(error){
		return res.status(500).json({'status':'error','message':'user login was not successful'})
	})
}

module.exports={
	registerUser:registerUser,
	loginUser:loginUser
}