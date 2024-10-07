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

const Project = mongoose.model("Project", projectSchema);

export default Project;
