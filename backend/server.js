require('dotenv').config();
const express = require('express');
const server = express();
const routes = require('./routes');
const mongoose = require('mongoose');

server.use(express.json({ limit: '3mb'}));
// server.use('/news', routes); You can put a default route but ideal for backend
server.use(routes);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

mongoose.connection.once('open', function() {
    console.log("Congratulations! You are now connected to the Database");
}).on('error', function(err) {
    console.log("Connection Error:", err);
});

const port = 8000;
server.listen(port, () => console.log(`Listening on port ${port}...`));