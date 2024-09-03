import { models, model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioLink?: string;
  reputation?: number;
  joinDate: Date;
  saved: Schema.Types.ObjectId[];
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  bio: { type: String, required: false },
  picture: { type: String, required: true },
  location: { type: String, required: false },
  portfolioLink: { type: String, required: false },
  reputation: { type: Number, default: 0, required: false },
  joinDate: { type: Date, default: Date.now },
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});

export const User = models.User || model("User", UserSchema);
