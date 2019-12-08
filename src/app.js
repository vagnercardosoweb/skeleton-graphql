import { ApolloServer } from 'apollo-server';

import schema from './schema';
import context from './context';

export default new ApolloServer({
  schema,
  playground: true,
  context,
  cors: false,
});
