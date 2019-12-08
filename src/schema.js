import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { query as UsersQuery, mutation as UsersMutation } from './users';
import { query as PostsQuery } from './posts';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...UsersQuery,
      ...PostsQuery,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      ...UsersMutation,
    },
  }),
});
