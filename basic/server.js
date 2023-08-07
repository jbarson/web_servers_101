const http = require('http');

const callback = function(request, response){
    // console.log('request: ', request)
    console.log('verb: ', request.method);
    console.log('path: ', request.url);
    if(request.url === "/wakko") {
        response.end('A warner brother')
    }
    response.end('<h1>Hello Nurse</h1><p>We have baloney in our slacks</p>');
};
const server = http.createServer(callback);

server.listen(3004, function(){
    console.log('I am running on http://localhost:3004')
})