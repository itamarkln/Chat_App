const authResolver = require('./auth');

// the object which contains all resolvers pieces, will be exported to app.js file.
const rootResolver = {
    // spreading all the fields from each resolver piece.
    ...authResolver
};

module.exports = rootResolver;