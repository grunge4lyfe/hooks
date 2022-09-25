const proxy = require('express-http-proxy');
const app = require('express')();

require('dotenv').config();
const PORT = process.env.PORT || 3030;

app.use('/', proxy('https://discord.com'));

app.listen(PORT, () => {
    console.log(`Server is listening on port *:${PORT}`);
});