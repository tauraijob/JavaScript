var http = require('http'); //http object
var text = require('./myFirstModule');
http.createServer(function (req, res){
	var coolReply = text.mytext("booya");
    res.writeHead(200, { 'Content-Type' : 'text/plain'});
    res.end(coolReply);
    console.log(req.url)
    if (req.url == "/pageone") {
    	res.end("you requested page one");
    }else if (req.url == "pagetwo"){
    	res.end("you requested page two");
    }else{
    	res.end("you requested home");
    }
}).listen(8080); //.listen listens to the request