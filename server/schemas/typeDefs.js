const { gql } = require('express-graphql');

const typeDefs = gql `
type User {
  _id: ID
  username: String
  password: String
  email: String
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
  users: [User]
  calendarItem(_id: ID!): CalendarItem
  goal(_id: ID!): Goal
  calendarItems: [CalendarItem]
  goals: [Goals]
  accomplishments: [Accomplishments]
}

type Mutation {
  login(username: String!, password: String!, email: String!): Auth
  addUser(username: String!, password: String!): Auth
  addCalendarItem(body: String!, date: Dateonly!, startHour: Integer!): CalendarItem
  addGoal(body: String!, date: Dateonly!): Goal
  addAccomplishment(body: String!, date: Dateonly!): Accomplishment
}
`;

module.exports = typeDefs;