import type { Resolvers } from './generated/graphql.js';

import typeDefinitions from './schema.graphql';
export const userTypeDefinitions = typeDefinitions;

export const userResolvers: Resolvers = {
	Query: {
		user: () => 'Hello user!',
	},
};
