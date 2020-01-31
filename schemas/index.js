import { bind, combineSchemas } from '@cypress/schema-tools';
import { QueryResponseSchema, QueryResultSchema } from './queryResponse.js';

export const schemas = combineSchemas(QueryResponseSchema, QueryResultSchema);
export const api = bind({ schemas })