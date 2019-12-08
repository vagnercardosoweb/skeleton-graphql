import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import PostType from '../posts/posts.type';
import { getPostsByUserId } from '../posts/posts.resolvers';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    posts: { type: GraphQLList(PostType), resolve: getPostsByUserId },
  },
});
