const server = require('./src/app');

server.listen(process.env.PORT || 3000, () => {
    console.log('[Book]: Book service started')
});