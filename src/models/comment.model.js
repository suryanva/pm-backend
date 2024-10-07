import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  text: { type: String, required: true },
  taskId: { type: Schema.Types.ObjectId, ref: "Task", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
