import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../factories/UserFactory";
import { User } from "../models";
import { ObjectId } from "mongoose";

const userResolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: ObjectId }) => {
      return await getUser(id);
    },
    getUsers: async (_: any) => {
      return await getUsers();
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      { name, email }: { name: string; email: string }
    ) => {
      return await createUser(name, email);
    },
    updateUser: async (
      _: any,
      { id, name, email }: { id: ObjectId; name: string; email: string }
    ) => {
      return await updateUser(id, name, email);
    },
    deleteUser: async (_: any, { id }: { id: ObjectId }) => {
      return await deleteUser(id);
    },
  },
};

export default userResolvers;
