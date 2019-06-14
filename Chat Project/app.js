const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

// Schemas and Resolvers we exported from these files.
const graphqlSchema = require('./graphql/schema/schema');
const graphqlResolver = require('./graphql/resolvers/index');

// Using the middlewares.
app.use(bodyParser.urlencoded({extended: true})); // parsing text data / plain text data.
app.use(bodyParser.json());

// Creating the app object.
const app = express();

// The app routes / end-points.
app.use('/graphql', graphqlHttp({ // configuring the graphql api.
    // points to a graphql schema sticked to the graphql specifications.
    schema: graphqlSchema,

    // points to a JS object that has all the Resolvers functions
    rootValue: graphqlResolver,

    // built-in debugging and developing tool which express-graphql gives.
    graphiql: true
}));

module.exports = app;