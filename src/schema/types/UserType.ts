import { gql } from "graphql-tag";

export const UserType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
`;
