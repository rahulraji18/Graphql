const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/config.env' })

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

await mongoose.connect(process.env.DB_NAME, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
console.log('Mongoose connected...')

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is running on port ${port}`));
}
startServer();