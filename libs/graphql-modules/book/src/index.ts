import type { Resolvers } from './generated/graphql.js';

import typeDefinitions from './schema.graphql';
export const bookTypeDefinitions = typeDefinitions;

export const bookResolvers: Resolvers = {
	Query: {
		book: () => ({
			id: 'ID',
			title: 'Title',
		}),
	},
};
