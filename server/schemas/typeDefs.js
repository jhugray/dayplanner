const { gql } = require('express-graphql');

const typeDefs = gql `
type User {
  _id: ID
  username: String
  password: String
}

type CalendarItem {
  _id: ID
  body: String
  completionStatus: Boolean
  date: Date
  startHour: Integer
  user: [User]
}

type Goal {
  _id: ID
  body: String
  completionStatus: Boolean
  date: Date
  user: [User]
}

type Accomplishment {
  _id: ID
  body: String
  date: Date
  user: [User]
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
// pick up here.... 

}

type Mutation {

}


`;

module.exports = typeDefs;