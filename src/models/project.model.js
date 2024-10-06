import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    startDate: Date,
    endDate: Date,
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    projectTeams: [{ type: Schema.Types.ObjectId, ref: "ProjectTeam" }],
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);
