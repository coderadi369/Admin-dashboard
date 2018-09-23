const {DB}=require(`${__base}/utils/db`)
const {config}=require(`${__base}/utils/config`)
const {saveSessionandcookie}=require(`${__base}/utils/helper`)

function registerUser(req,res){
	let database=new DB()
    const {client:{mongodb}}=config
    database.connect(mongodb.defaultUri+'/'+mongodb.defaultDatabase).then(()=>{
          return database.insertDocuments('users',req.body)
    }).then(function(data){
    	 saveSessionandcookie(req,res,req.body)
    	 database.close()
    	 return res.status(200).json({'status':'success','message':'user inserted successfully'})
	}).catch(function(error){
		 console.log("eroor",error)
		 database.close()
		 return res.status(500).json({'status':'error','message':'some error occured while inserting into db'})
	})
}


function loginUser(req,res){
	let database=new DB()
	const {client:{mongodb}}=config
	database.connect(mongodb.defaultUri+'/'+mongodb.defaultDatabase).then(()=>{
		return database.findDocuments('users',{'username':req.body.username,'password':req.body.password})
	}).then(function(data){
		saveSessionandcookie(req,res,data.result)
		database.close()
		return res.status(200).json({'status':'success','message':'user logged in successfully'})
	}).catch(function(error){
		database.close()
		return res.status(500).json({'status':'error','message':'user login was not successful'})
	})
}


function getAllUsers(req,res){
	let database=new DB()
	const {client:{mongodb}}=config
	database.connect(mongodb.defaultUri+'/'+mongodb.defaultDatabase).then(()=>{
		return database.findDocuments('users',{})
	}).then(function(data){
		database.close()
		return res.status(200).json({'status':'success','data':data})
	}).catch(function(error){
		database.close()
		return res.status(500).json({'status':'error','message':'user login was not successful'})
	})
}

module.exports={
	registerUser:registerUser,
	loginUser:loginUser,
	getAllUsers
}