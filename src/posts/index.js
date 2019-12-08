import { GraphQLList } from 'graphql';

import PostType from './posts.type';
import { getPosts } from './posts.resolvers';

export const query = {
  posts: {
    type: GraphQLList(PostType),
    resolve: getPosts,
  },
};
