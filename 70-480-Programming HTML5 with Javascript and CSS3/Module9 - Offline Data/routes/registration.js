module.exports.new = function(req,res){
	var data = req.body;
	hasValidPassword = passwordsMatch(data.Password,data.ConfirmPassword);
	if(!hasValidPassword)
		return res.send("Passwords don't match");
	
	res.redirect('/registered.htm');
};

var passwordsMatch = function (password,confirmedPassword) {
	return password === confirmedPassword;
}