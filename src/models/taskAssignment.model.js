import mongoose, { Schema } from "mongoose";

const taskAssignmentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  taskId: { type: Schema.Types.ObjectId, ref: "Task", required: true },
});

export const TaskAssignment = mongoose.model(
  "TaskAssignment",
  taskAssignmentSchema
);
