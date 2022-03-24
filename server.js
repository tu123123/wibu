const jsonServer = require("json-server");
const server = jsonServer.create();
const router=jsonServer.router("/src/database/db.json");
const middlewares=jsonServer.defaults({
    static:"./build",
});
const port=process.env.port||8000;
server.use(middlewares);
server.use(
    jsonServer.rewriter({
        '/api/*':"/$1",
    })
);
server.use(router);
server.listen(port,()=>{
    console.log(port);
})