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
	if(req.url === '/favicon.ico'){
		errorM.throwWebError(res, 204);
	}
	else{
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
}

function routes(req, res, bodyObject){

	if(bodyObject.request){
		let url = req.url.substring(1);
		url = url.substring(0, url.indexOf("/"));
		if(url === 'pet'){
			pet(req, res);
		}
		else if(url === 'user'){
			user(req, res);
		}
		else if(url === 'vet'){
			vet(req, res);
		}
		else if(url === 'notification'){
			notification(req, res);
		}
		else if(url === 'pfp'){
			pfp(req, res);
		}
		else if(url === 'owner'){
			owner(req, res);
		}
		else if(url === 'wiki'){
			wiki(req, res);
		}
		else if(url === 'chat'){
			chat(req, res);
		}
		else if(url === 'login'){
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