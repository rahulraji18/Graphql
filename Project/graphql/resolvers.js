const Post = require('../models/post');

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world'
        },
        getAllPosts: async() => {
            return await Post.find()
        },
        getPost: async (parent,{id},context,info) => {
            return await Post.findById(id);
        }
    },

    Mutation: {
        createPost: async (parent, args, context, info) => {
            const {title, description} = args.post;
            const post = new Post({ title,description});
            await post.save();
            return post;

        },
        deletePost: async (parent,args,context,info) => {
            const {id} = args;
            await Post.findByIdAndDelete(id);
            return `Post Deleted in this ${id}`;  
        },
        updatePost: async(parent,args,context,info) => {
            const {id} = args;
            const {title,description} = args.post;
            // const updates = {}
            // if(title !== undefined) {
            //     updates.title = title
            // }
            // if(description !== undefined) {
            //     updates.description = description
            // }
            // const post = await Post.findByIdAndUpdate(id,updates, {new: true});
            const post = await Post.findByIdAndUpdate(id, {title, description}, {new: true});
            return post;    
        }
    }
}

module.exports = resolvers;


