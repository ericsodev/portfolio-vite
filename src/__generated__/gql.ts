/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetIndex { \n      intro {\n          data {\n              attributes {\n                  tagline\n              }\n          }\n        }\n      about {\n        data {\n          attributes {\n            description\n          }\n        }\n      }\n      skills(filters: {type: {ne: \"unlisted\"}}, pagination: {limit: -1}) {\n          data {\n              attributes {\n                  name\n                  icon_name\n                  type\n              }\n          }\n      }  \n      experiences(sort: [\"start\", \"end\"]) {\n        data {\n          attributes {\n            company\n            start\n            end \n            role\n            description\n          }\n        }\n      }\n      contact {\n        data {\n          attributes {\n            github\n            linkedin\n            website\n            personal_email\n            business_email\n          }\n        \n        }\n      }\n      projects(sort: [\"priority\"], pagination: {limit: -1}) {\n        data {\n          attributes {\n            name\n            github\n            website\n            long_desc\n            description\n            priority\n            skills {\n              data {\n                attributes {\n                  name\n                  type\n                  icon_name\n                }\n              }\n            }\n            \n          }\n        }\n      }\n  }": types.GetIndexDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetIndex { \n      intro {\n          data {\n              attributes {\n                  tagline\n              }\n          }\n        }\n      about {\n        data {\n          attributes {\n            description\n          }\n        }\n      }\n      skills(filters: {type: {ne: \"unlisted\"}}, pagination: {limit: -1}) {\n          data {\n              attributes {\n                  name\n                  icon_name\n                  type\n              }\n          }\n      }  \n      experiences(sort: [\"start\", \"end\"]) {\n        data {\n          attributes {\n            company\n            start\n            end \n            role\n            description\n          }\n        }\n      }\n      contact {\n        data {\n          attributes {\n            github\n            linkedin\n            website\n            personal_email\n            business_email\n          }\n        \n        }\n      }\n      projects(sort: [\"priority\"], pagination: {limit: -1}) {\n        data {\n          attributes {\n            name\n            github\n            website\n            long_desc\n            description\n            priority\n            skills {\n              data {\n                attributes {\n                  name\n                  type\n                  icon_name\n                }\n              }\n            }\n            \n          }\n        }\n      }\n  }"): (typeof documents)["\n  query GetIndex { \n      intro {\n          data {\n              attributes {\n                  tagline\n              }\n          }\n        }\n      about {\n        data {\n          attributes {\n            description\n          }\n        }\n      }\n      skills(filters: {type: {ne: \"unlisted\"}}, pagination: {limit: -1}) {\n          data {\n              attributes {\n                  name\n                  icon_name\n                  type\n              }\n          }\n      }  \n      experiences(sort: [\"start\", \"end\"]) {\n        data {\n          attributes {\n            company\n            start\n            end \n            role\n            description\n          }\n        }\n      }\n      contact {\n        data {\n          attributes {\n            github\n            linkedin\n            website\n            personal_email\n            business_email\n          }\n        \n        }\n      }\n      projects(sort: [\"priority\"], pagination: {limit: -1}) {\n        data {\n          attributes {\n            name\n            github\n            website\n            long_desc\n            description\n            priority\n            skills {\n              data {\n                attributes {\n                  name\n                  type\n                  icon_name\n                }\n              }\n            }\n            \n          }\n        }\n      }\n  }"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;