import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Posts',
  fields: {
    id: { type: GraphQLNonNull(GraphQLInt) },
    user_id: { type: GraphQLNonNull(GraphQLInt) },
    slug: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    created_at: { type: GraphQLNonNull(GraphQLString) },
  },
});
