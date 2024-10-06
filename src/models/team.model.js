import mongoose, { userSchema } from "mongoose";

const teamSchema = new Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    productOwnerUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    productManagerUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Team = mongoose.model("Team", teamSchema);
