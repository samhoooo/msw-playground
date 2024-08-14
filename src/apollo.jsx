import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const initApolloClient = () => { 
    return new ApolloClient({
        uri: 'https://flyby-router-demo.herokuapp.com/',
        cache: new InMemoryCache(),
    })
};

export const AppApolloProvider = ({
    ctx,
    children,
  }) => {
  const client = initApolloClient(ctx);
  
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
  