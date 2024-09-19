import type { CodegenConfig } from '@graphql-codegen/cli';
import { userTypeDefinitions } from '@graphql-modules/user';

const config: CodegenConfig = {
	schema: [userTypeDefinitions],
	documents: ['src/**/*.ts'],
	ignoreNoDocuments: true,
	emitLegacyCommonJSImports: false,
	generates: {
		'./src/graphql/': {
			preset: 'client',
		},
	},
};

export default config;
