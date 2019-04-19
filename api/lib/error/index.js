function throwError(){

}

function dbError(code, message){
	var code = code;
	var message = message;
}

function throwWebError(res, error){
	let message = '';
	switch (error){
		case 101:
			message = 'switching protocols';
		break;
		case 301:
			message = 'moved permanently';
		break;
		case 302:
			message = 'moved temporarily';
		break;
		case 400:
			message = 'bad request';
		break;
		case 401:
			message = 'unauthorized';
		break;
		case 403:
			message = 'forbidden';
		break;
		case 404:
			message = 'not found';
		break;
		case 500:
			message = 'internal server error';
		break;
	}
	res.writeHead(error);
	res.end(JSON.stringify({ code: error, message: message }));
}
module.exports = {
	throwWebError,
	throwError,
	dbError
}