const cookieUtils=require(`${__base}/utils/cookie`)

function saveSessionandcookie(req,res,data){
	req.session.username=data.username
	req.session.role=data.role
	req.session.save();

	cookieUtils.setCookie(res,'username',data.username)
	cookieUtils.setCookie(res,'role',data.role)


}

function isAuthenticated(req, res, next) {
  if (req.session.username) {
    return next()
  } else {
    return res.status(400).json({'status':'fail','message':"You are not Authorized to do this"})
  }
}

module.exports={
	saveSessionandcookie,
	isAuthenticated
}