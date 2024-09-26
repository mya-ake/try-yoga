import { graphql } from './graphql/index.js';
import { Client, fetchExchange } from '@urql/core';

const client = new Client({
	url: 'http://localhost:4000/graphql',
	exchanges: [fetchExchange],
});

export const Document = graphql(`
  query getUser {
    user {
      id
      name
    }
    book {
      id
      title 
    }
  }
`);

const result = await client.query(Document, {}).toPromise();
console.log(result);
