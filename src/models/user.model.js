import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    authId: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    profilePictureUrl: { type: String },
    teamId: { type: Schema.Types.ObjectId, ref: "Team" },
    authoredTasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    assignedTasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    taskAssignments: [{ type: Schema.Types.ObjectId, ref: "TaskAssignment" }],
    attachments: [{ type: Schema.Types.ObjectId, ref: "Attachment" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
