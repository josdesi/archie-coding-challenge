import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    connectToDevTools:true,
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
});

export default client;