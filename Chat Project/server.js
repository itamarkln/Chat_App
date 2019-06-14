const { config } = require('dotenv');
config();

const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.DB_URI || ``;

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
.then(result => {
    // Listening for incoming requests.
    server.listen(PORT, () => console.log(`server started to listen on port ${PORT}`));
})
.catch(error => {
    console.log(error);
});