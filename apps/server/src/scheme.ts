import { createSchema } from 'graphql-yoga';
import { readFileSync } from 'node:fs';
import type { Resolvers } from './generated/graphql.js';
import { userResolvers, userTypeDefinitions } from '@graphql-modules/user';

const typeDefinitions = readFileSync('./src/schema.graphql', 'utf8');

const resolvers: Resolvers = {
	Query: {
		hello: () => 'Hello World!',
	},
};

export const schema = createSchema({
	resolvers: [resolvers, userResolvers],
	typeDefs: [typeDefinitions, userTypeDefinitions],
});
