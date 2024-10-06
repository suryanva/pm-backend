import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    authId: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    teamId: {
      type: Schema.Types.ObjectId,
      ref: "Team",
    },
    authoredTasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
    assignedTasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
