import mongoose, { Schema } from "mongoose";

const projectTeamSchema = new Schema({
  teamId: { type: Schema.Types.ObjectId, ref: "Team", required: true },
  projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
});

export const ProjectTeam = mongoose.model("ProjectTeam", projectTeamSchema);
