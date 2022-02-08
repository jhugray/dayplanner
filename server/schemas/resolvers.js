const { AuthenticationError } = require('express-graphql');
const { User, CalendarItem, Accomplishment, Goal } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({
          where: { _id: 'context.user._id' },
          include: [
            {
              model: CalendarItem,
              attributes: ['id', 'body', 'completionStatus', 'date', 'startHour']
            },
            {
              model: Accomplishment,
              attributes: ['id', 'body', 'date']
            },
            {
              model: Goal,
              attributes: ['id', 'body', 'completionStatus', 'date']
            }
          ]
        })
        return userData;
      }
      throw new AuthenticationError('Not signed in');
    },
    
    user: async (parent, { _id }) => {
      return User.findOne({
        where: { _id: '_id' },
        include: [
          {
            model: CalendarItem,
            attributes: ['id', 'body', 'completionStatus', 'date', 'startHour']
          },
          {
            model: Accomplishment,
            attributes: ['id', 'body', 'date']
          },
          {
            model: Goal,
            attributes: ['id', 'body', 'completionStatus', 'date']
          }
        ]
      })
    },

    calendarItem: async (parent, { _id }) => {
      return CalendarItem.findOne({ _id });
    },

    calendarItems: async (parent, args, context) => {
      if (context.user) {
        const calendarItemData = await CalendarItem.findAll({ user_id: context.user._id })
        
        return calendarItemData;
      }
      throw new AuthenticationError('Not signed in');
    },
    
    accomplishment: async (parent, { _id }) => {
      return Accomplishment.findOne({ _id });
    },

    accomplishments: async (parent, args, context) => {
      if (context.user) {
        const accomplishmentData = await Accomplishment.findAll({ user_id: context.user._id })
        
        return accomplishmentData
      }
      throw new AuthenticationError('Not signed in');
    },

    goal: async (parent, { _id }) => {
      return Goal.findOne({ _id });
    },

    goals: async (parent, args, context) => {
      if (context.user) {
        const goalData = await GoalItem.findAll({ user_id: context.user._id })
        
        return goalData;
      }
      throw new AuthenticationError('Not signed in');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addCalendarItem: async (parent, args, context) => {
      if (context.user) {
        const calendarItem = await CalendarItem.create({ ...args});

        return calendarItem;
      }
      throw new AuthenticationError('You need to be signed in!');
    },

    addAccomplishment: async (parent, args, context) => {
      if (context.user) {
        const accomplishment= await Accomplishment.create({ ...args});

        return accomplishment;
      }
      throw new AuthenticationError('You need to be signed in!');
    },

    addGoal: async (parent, args, context) => {
      if (context.user) {
        const goal = await Goal.create({ ...args});

        return goal;
      }
      throw new AuthenticationError('You need to be signed in!');
    }
  }
};

module.exports = resolvers;