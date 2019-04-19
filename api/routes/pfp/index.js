const errorM = require(libError);

function pfpRouter(req, res){
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
module.exports = pfpRouter;