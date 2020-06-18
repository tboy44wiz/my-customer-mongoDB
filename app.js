const express = require('express');     //  Importing Express Package.
require('dotenv').config();     //  Import Environment variables
require('./config/db_config');   //  Importing the mongoose package.


//  Importing Routes



//  Set Up Express App
const app = express();


//  parse JSON-encoded bodies and URL-encoded bodies



//  Using Middleware Morgan for logging.



//  Requesting for imported Routes



//  Run the Express Server.
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}, Kindly visit http://${HOST}:${PORT}`);
});