const next = require('next')
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./src/routes')
const dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';
const app = next({dev})
const handler = routes.getRequestHandler(app)

const {createServer} = require('http')

require("dotenv").config()

app.prepare().then(() => {
    createServer(handler).listen(process.env.NODE_ENV !== 'production' ? 8082 : 8081)
})