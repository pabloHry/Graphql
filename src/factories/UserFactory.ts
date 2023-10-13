import { ObjectId } from "mongoose";
import { User } from "../models";
import { IUser } from "../types/User";

export const createUser = async (name: string, email: string) => {
  try {
    const user = new User({ name, email });
    await user.save();
    return user;
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

export const getUser = async (id: ObjectId) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error: any) {
    throw new Error(`Failed to get user: ${error.message}`);
  }
};

export const getUsers = async (): Promise<IUser[]> => {
  try {
    return await User.find();
  } catch (error: any) {
    throw new Error(`Failed to get users: ${error.message}`);
  }
};

export const updateUser = async (
  id: ObjectId,
  name?: string,
  email?: string
): Promise<IUser | null> => {
  try {
    return await User.findByIdAndUpdate(id, { name, email }, { new: true });
  } catch (error: any) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
};

export const deleteUser = async (id: ObjectId): Promise<boolean> => {
  try {
    const result = await User.findByIdAndDelete(id);
    return !!result;
  } catch (error: any) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
};
