const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const app = express();

const Schema = buildSchema(`
    type Query {
        hello: String
        welcomeMessage(name: String, dayOfWeek: String!): String
    }
`)

const root = {
    hello: () => {
        return "Hello world!";
    
    },
    welcomeMessage: (args) => {
        console.log(args);
        return `Hi ${args.name}, Welcome to Spericorn [ Joined At : ${args.dayOfWeek}]`
    }
}
// Endpoint
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: Schema,
    rootValue: root
}))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port --- ${port}`);
})

// query {
//     hello
//     welcomeMessage(name: "rahul", dayOfWeek: "Sunday")
//   }