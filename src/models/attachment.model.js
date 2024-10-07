import mongoose, { Schema } from "mongoose";

const attachmentSchema = new Schema({
  fileURL: { type: String, required: true },
  fileName: String,
  taskId: { type: Schema.Types.ObjectId, ref: "Task", required: true },
  uploadedById: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Attachment = mongoose.model("Attachment", attachmentSchema);

export default Attachment;
