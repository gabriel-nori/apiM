const errorM = require(libError);

function notificationRouter(req, res){
	switch (req.method){
		case 'GET':
			res.end('yupi');
		break;
		case 'DELETE':
			res.end('DELETE');
		break;
		default:
			errorM.throwWebError(res, 401);
		break;
	}
}
module.exports = notificationRouter;