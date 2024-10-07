import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  status: String,
  priority: String,
  tags: [String],
  startDate: Date,
  dueDate: Date,
  points: Number,
  projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  authorUserId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  assignedUserId: { type: Schema.Types.ObjectId, ref: "User" },
  taskAssignments: [{ type: Schema.Types.ObjectId, ref: "TaskAssignment" }],
  attachments: [{ type: Schema.Types.ObjectId, ref: "Attachment" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
