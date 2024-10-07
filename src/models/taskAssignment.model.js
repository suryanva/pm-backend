import mongoose, { Schema } from "mongoose";

const taskAssignmentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  taskId: { type: Schema.Types.ObjectId, ref: "Task", required: true },
});

const TaskAssignment = mongoose.model("TaskAssignment", taskAssignmentSchema);

export default TaskAssignment;
