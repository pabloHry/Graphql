import { createUser } from "../../factories/UserFactory";
import { connectDB } from "../../db";
import { User } from "../../models";
import { describe, expect, test } from "@jest/globals";
import { IUser } from "../../types/User";

describe("UserFactory", () => {
  beforeAll(async () => {
    await connectDB();
  });

  test("should create a user", async () => {
    const name = "Test User";
    const email = "test@example.com";

    const user: IUser = await createUser(name, email);

    expect(user).toBeDefined();
    expect(user.name).toEqual(name);
    expect(user.email).toEqual(email);

    await User.findByIdAndDelete(user._id);
  });
});
