import type { CodegenConfig } from "@graphql-codegen/cli";
import { commonTypeDefinitions } from "@graphql-modules/common";
import { userTypeDefinitions } from "@graphql-modules/user";
import { bookTypeDefinitions } from "@graphql-modules/book";

const config: CodegenConfig = {
  schema: [commonTypeDefinitions, userTypeDefinitions, bookTypeDefinitions],
  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true,
  emitLegacyCommonJSImports: false,
  generates: {
    "./src/graphql/": {
      preset: "client",
    },
  },
};

export default config;
