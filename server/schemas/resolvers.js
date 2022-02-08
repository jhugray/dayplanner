const { AuthenticationError } = require('express-graphql');
const { User, CalendarItem, Accomplishment, Goal } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    
  }


}