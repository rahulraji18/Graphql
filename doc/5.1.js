const express = require('express');
const { ApolloServer, gql} = require('apollo-server-express');
const typeDefs = gql`
    type Query {
        hello: String 
    }
`
const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world'
        }
    }
}

async function startServer() {
    const app =  express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });
await apolloServer.start();

apolloServer.applyMiddleware({app: app});
// apolloServer.applyMiddleware({app: app, path: '/home'});

app.use((req,res) =>{
    res.send(`Hello from express apollo server`);
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is running on port ${port}`));
}
startServer();