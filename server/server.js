var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');

var app = express();

app.use('/graphql', graphqlHTTP({
  typeDefs,
  resolvers,
  contest: authMiddleware,
}));

app.listen(4000);

console.log('Running a GraphQL API server at http://localhost:4000/graphql');