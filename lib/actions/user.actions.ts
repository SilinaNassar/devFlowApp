"use server";

import { User } from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath, revalidatePath } from "next/cache";
import { Question } from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    const { userId } = params;
    connectToDatabase();
    const user = await User.findOne({ clerckId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(userData: UpdateUserParams) {
  try {
    connectToDatabase();

    const { clerkId, updateData, path } = userData;
    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deletedUser(params: DeleteUserParams) {
  try {
    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("User is not found!");
    }
    // get the user questions id
    // const userQuestionIds = await Question.find({ author: user._id }).distinct(
    // "_id"
    // ); created for future use!
    // delete the questions
    await Question.deleteMany({ author: user._id });
    // To do to delete the user comments ,answers ,etc

    // delete user
    const deletedUser = await User.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
