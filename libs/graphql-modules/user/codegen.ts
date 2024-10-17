import { commonTypeDefinitions } from "@graphql-modules/common";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [commonTypeDefinitions, "./src/schema.graphql"],
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-document-nodes",
      ],
    },
  },
};

export default config;
