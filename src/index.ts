import { createApolloServer } from "./factories/ApolloServerFactory";
import { connectDB } from "./db";

connectDB();
createApolloServer();
