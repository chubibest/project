import { GraphQLServer } from 'graphql-yoga'
import prisma from './prisma';
import resolvers from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma
  }
})

server.start({ port: process.env.PORT || 4000 }, () => {
  console.log('The server is up!')
})
