var user = {
	
};
var requestObject = request('lib/models/request');
/*function login(identifier, password, mobileId, userAgent) {
  // Find the user
  let user = null;
  return findUserForLogin({ email: identifier.toLowerCase().trim() })
  .then((userFound) => {
    if (!userFound) throw new ZazcarError('USER_NOT_FOUND');
    user = userFound;
    // Check the password
    const compare = Promise.promisify(bcrypt.compare);
    return compare(password, user.password);
  })
  .then((res) => {
    if (!res) return Promise.reject(new ZazcarError('INCORRECT_PASSWORD'));
    return user.update({ lastUserAgent: userAgent });
  })
  .then((user) => {
    return getAuthResponse(user, mobileId);
  });
}*/

function login(){

}
function findUserId(email ){
	email = email.toLowerCase();

}

function validateToken(userId, token){
	return true;
}