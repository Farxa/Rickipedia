import React, {FC} from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";


  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });


  interface Props{
    children: JSX.Element;
  }


export default function API(props: Props) {
  return (
    <ApolloProvider client={client}>{props.children}</ApolloProvider>
  )
}
