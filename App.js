const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const axios = require('axios');

const app = express();
let message = "This is message";
const Schema = buildSchema(`
    type Post {
        userId: Int
        id: Int
        title: String
        body: String
    }

    type User {
        name: String
        age: Int
        college: String
    }

    type Query {
        hello: String!
        welcomeMessage(name: String, dayOfWeek: String!): String
        getUser: User
        getUsers: [User]
        getPostsFromExternalApi: [Post]
        message: String
    }

    input UserInput {
        name: String!
        age: Int!
        college: String!
    }

    type Mutation {
        setMessage(newMessage: String): String
        createUser(user: UserInput): User
    }
`)

const root = {
    hello: () => {
        return "Hello world!"; 
        // return null;
    },
    welcomeMessage: (args) => {
        console.log(args);
        return `Hi ${args.name}, Welcome to Spericorn [ Joined At : ${args.dayOfWeek}]`
    },
    getUser: () => {
        const user = {
            name: "Rahul",
            age: 23,
            college: "Uit Mukhathala"
        }
        return user;
    },
    getUsers: () => {
        const user = [{
            name: "Rahul",
            age: 23,
            college: "Uit Mukhathala"
        },{
            name: "Mithun",
            age: 22,
            college: "Uit Kollam"            
        }];
        return user;      
    },
    getPostsFromExternalApi: async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return result.data;
    },
    setMessage: ({newMessage}) => {
        message = newMessage
        return message
    },
    message: () => message,
    createUser: (args) => {
        console.log(args)
    // create a new user inside db or external api or even firestore   
    return args.user;
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


  
  