/** A response containing the documents and aggregations for the query. */
export interface QueryResponse {
  /** The number of matching results for the query. */
  matching_results: number;
  /** Array of document results for the query. */
  results: QueryResult[];
}

/** Result document for the specified query. */
interface QueryResult {
  /** The unique identifier of the document. */
  document_id: string;
  /** text of the result */
  text: string;
}
