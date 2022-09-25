const proxy = require('express-http-proxy');
const app = require('express')();

require('dotenv').config();
const PORT = process.env.PORT || 3030;

app.use('/', proxy('https://discord.com', {
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
        proxyReqOpts.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:105.0) Gecko/20100101 Firefox/105.0';
        return proxyReqOpts;
    }
}));

app.listen(PORT, () => {
    console.log(`Server is listening on port *:${PORT}`);
});