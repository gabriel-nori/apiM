const errorM = require(libError);

function userRouter(req, res){
	let url = req.url.substring(1);
	url = url.replace('user/', '');
	console.log(url);
	if(!url){
		switch (req.method){
			case 'POST':
				res.end('POST');
			break;
			case 'GET':
				res.end('yupi');
			break;
			case 'DELETE':
				res.end('DELETE');
			break;
			case 'PATCH':
				res.end('Tomar no cu');
			break;
			default:
				errorM.throwWebError(res, 401);
			break;
		}
	}
	else{
		res.end("funciona...");
	}
}
module.exports = userRouter;