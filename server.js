const http = require("http")
const fs = require("fs")

http.createServer(async function(request, response){
    let filePath = request.url.substring(1);
    response.end(filePath)
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));