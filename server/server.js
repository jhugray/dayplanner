const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 4000;


app.use('/graphql', graphqlHTTP({
  // typeDefs,
  // resolvers,
  contest: authMiddleware,
}));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

console.log('Running a GraphQL API server at http://localhost:4000/graphql');