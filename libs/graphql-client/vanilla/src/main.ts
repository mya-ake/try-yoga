import { graphql } from './graphql/index.js';
import { Client, fetchExchange } from '@urql/core';

const client = new Client({
	url: 'http://localhost:4000/graphql',
	exchanges: [fetchExchange],
});

export const userDocument = graphql(`
  query getUser {
    user {
      id
      name
    }
  }
`);

const result = await client.query(userDocument, {}).toPromise();
console.log(result);
