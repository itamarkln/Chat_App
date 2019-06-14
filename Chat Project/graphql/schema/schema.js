const { buildSchema } = require('graphql'); // importing a property func from graphql library.

module.exports = buildSchema(`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        conversations: [Conversation!]
        messages: [Message!]
        createdAt: Date
        updatedAt: Date
    }
    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }
    type Conversation {
        _id: ID!
        name: String!
        messages: [ID!]
        members: [ID!]
        createdAt: Date
        updatedAt: Date
    }
    type Message {
        _id: ID!
        authorId: ID!
        content: String!
        conversationId: ID!
        createdAt: Date
        updatedAt: Date
    }


    input createUserInput {
        username: String!
        email: String!
        password: String!
        createdAt: Date
        updatedAt: Date
    }
    input UpdateUserInput {
        id: ID!
        username: String!
        email: String!
        password: String!
        createdAt: Date
        updatedAt: Date
    }
    input DeleteUserInput {
        id: ID!
    }
    input CreateMessageInput {
        authorId: ID!
        conversationId: ID!
        content: String!
        createdAt: Date
        updatedAt: Date
    }
    input UpdateMessageInput {
        id: ID!
        authorId: ID!
        content: String!
        conversationId: ID!
        createdAt: Date
        updatedAt: Date
    }
    input DeleteMessageInput {
        id: ID!
    }
    input CreateConversationInput {
        name: String!
        createdAt: Date
        updatedAt: Date
    }
    input UpdateConversationInput {
        id: ID!
        name: String!
        messages: [ID!]
        members: [ID!]
        createdAt: Date
        updatedAt: Date
    }
    input DeleteConversationInput {
        id: ID!
    }
    

    type rootQuery {
        getAllUsers: [User!]!
        getAllConversations: [Conversation!]!
        getSingleUser(userId: ID!): User!
        getSingleConversation(conversationId: ID!): Conversation!
        getSingleMessage(conversationId: ID!, messageId: ID!): Message!
        login(email: String!, password: String!): AuthData!
    }
    type rootMutation {
        createUser(input: CreateUserInput!): User!
        updateUser(input: UpdateUserInput!): User!
        deleteUser(input: DeleteUserInput!): User!
        createMessage(input: CreateMessageInput!): Message!
        updateMessage(input: UpdateMessageInput!): Message!
        deleteMessage(input: DeleteMessageInput!): Message!
        createConversation(input: CreateConversationInput!): Conversation!
        updateConversation(input: UpdateConversationInput!): Conversation!
        deleteConversation(input: DeleteConversationInput!): Conversation!
    }
    schema {
        query: rootQuery
        mutation: rootMutation
    }
`);