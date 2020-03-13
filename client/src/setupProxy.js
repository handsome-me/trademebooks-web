const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000', /*changeOrigin: true*/ }));
    //app.use(proxy("/socket.io", {target: "ws://localhost:5000", ws: true}))
};