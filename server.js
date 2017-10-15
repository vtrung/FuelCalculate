import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index');
});

server.use('/api', apiRouter);
server.use(express.static('public')); //use public folder to serve files

server.listen(config.port, () => {
    console.log("Express listening on port: " + config.port);
});
