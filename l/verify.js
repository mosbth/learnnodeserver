var child = require("child_process");

var server = child.exec("babel-node serverStart.js", [], function() {
    console.log("Child done");
});

server.on('exit', function(){
    console.log("Child process exited");
})

server.stdout.on('data', function(data){
    console.log(data);
})

console.log(server.pid);

setTimeout(function() {
    console.log("timeout");
}, 500);

console.log("Killing child");
server.kill();
