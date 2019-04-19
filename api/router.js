const pet = require('./routes/pet');
const user = require('./routes/user');
const vet = require('./routes/vet');
const notification = require('./routes/notification');
const pfp = require('./routes/pfp');
const owner = require('./routes/owner');
const wiki = require('./routes/wiki');
const chat = require('./routes/chat');
const login = require('./routes/login');
const errorM = require(libError);
function router(req, res){
	let body = '';
	var bodyObject;
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    }).on('end', () => {
    	try{
			bodyObject = JSON.parse(body);
			routes(req, res, bodyObject);
		}
		catch(error){
			errorM.throwWebError(res, 400);
		}
    });
}

function routes(req, res, bodyObject){

	if(bodyObject.request){
		if(req.url === '/pet'){
			pet(req, res);
		}
		else if(req.url === '/user'){
			user(req, res);
		}
		if(req.url === '/vet'){
			vet(req, res);
		}
		else if(req.url === '/notification'){
			notification(req, res);
		}
		else if(req.url === '/pfp'){
			pfp(req, res);
		}
		else if(req.url === '/owner'){
			owner(req, res);
		}
		else if(req.url === '/wiki'){
			wiki(req, res);
		}
		else if(req.url === '/chat'){
			chat(req, res);
		}
		else if(req.url === '/login'){
			login(req, res);
		}
		else{
			errorM.throwWebError(res, 404);
		}
	}
	else{
		errorM.throwWebError(res, 400);
	}
	res.end();
}

module.exports = router;