import { versionSchemas } from "@cypress/schema-tools";
import schemaOutput from '../schemaOutput.json'

const QueryResponseSchemaDeff = schemaOutput.definitions.QueryResponse;
const QueryResultSchemaDeff = schemaOutput.definitions.QueryResult;

const QueryResponseExample = {
  matching_results: 2,
  results: [
    {
      document_id: "123",
      text: "im the first document"
    },
    {
      document_id: "456",
      text: "im the second document"
    }
  ]
};
const QueryResultExample = {
  text: "I'm text",
  document_id: '123'
}

const QueryResponseSchema100 = {
  version: {
    major: 1,
    minor: 0,
    patch: 0
  },
  schema: QueryResponseSchemaDeff,
  example: QueryResponseExample,
  title: "QueryResponse"
};
const QueryResultSchema100 = {
  version: {
    major: 1,
    minor: 0,
    patch: 0
  },
  schema: QueryResultSchemaDeff,
  example: QueryResultExample,
  title: "QueryResult"
}

export const QueryResponseSchema = versionSchemas(QueryResponseSchema100);
export const QueryResultSchema = versionSchemas(QueryResultSchema100);