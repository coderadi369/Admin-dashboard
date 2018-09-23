const config={
	'port':4000,
	 client: {
        mongodb: {
            defaultDatabase: "Manch",
            defaultCollection: "users",
            defaultUri: "mongodb://localhost:27017"
        }
    }
}


module.exports={
	config
}