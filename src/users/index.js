import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import UserType from './users.type';
import { getUsers, getUserById, createUser } from './users.resolvers';

export const query = {
  users: {
    type: GraphQLList(UserType),
    resolve: getUsers,
  },
  user: {
    type: UserType,
    args: { id: { type: GraphQLNonNull(GraphQLInt) } },
    resolve: getUserById,
  },
};

export const mutation = {
  createUser: {
    type: UserType,
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
      email: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: createUser,
  },
};
