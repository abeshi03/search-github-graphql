import {ApolloClient, ApolloLink, HttpLink, InMemoryCache, NextLink, Operation} from "@apollo/client";

const GITHUB_TOKEN: string | undefined = process.env.REACT_APP_GITHUB_TOKEN;

const headersLink = new ApolloLink((operation: Operation, forward: NextLink) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`
    }
  })
  return forward(operation);
})

const endpoint: string = "https://api.github.com/graphql";
const httpLink: HttpLink = new HttpLink({ uri: endpoint });
const link: ApolloLink = ApolloLink.from([ headersLink, httpLink ]);

export default new ApolloClient({
  link,
  cache: new InMemoryCache()
});
