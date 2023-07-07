import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://strapi-production-e27f.up.railway.app/graphql",

  documents: ["pages/**/*.tsx", "pages/**/*.ts", "server/**/*.ts"],

  generates: {
    "./src/__generated__/": {
      preset: "client",

      plugins: [],

      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },

  ignoreNoDocuments: true,
};

export default config;
