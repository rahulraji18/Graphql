const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const axios = require('axios');

const app = express();

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
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //      .then(result => result.data);
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

// query {
// 	getUser {
//     name
//     //age
//   }
// }

// query {
// 	getUsers {
//     name
//     age
//   }
// }

// query {
//     getPostsFromExternalApi{
//       id
//       title
//       body
//     }
//   }
  
  