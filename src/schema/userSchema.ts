import { gql } from "graphql-tag";
import { UserType } from "./types/UserType";

export const userSchema = gql`
  ${UserType}

  type Query {
    getUser(id: ID!): User
    getUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): Boolean
  }
`;

export default userSchema;
