import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
import User from "../src/models/user.model.js";
import Team from "../src/models/team.model.js";
import Project from "../src/models/project.model.js";
import Task from "../src/models/task.model.js";
import TaskAssignment from "../src/models/taskAssignment.model.js";
import ProjectTeam from "../src/models/projectTeam.model.js";
import Comment from "../src/models/comment.model.js";
import Attachment from "../src/models/attachment.model.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo db connection failed  ", error);
  });

// const seedDatabase = async () => {
//   try {
//     // Remove existing data
//     await User.deleteMany({});
//     await Team.deleteMany({});
//     await Project.deleteMany({});
//     await Task.deleteMany({});
//     await TaskAssignment.deleteMany({});
//     await ProjectTeam.deleteMany({});
//     await Comment.deleteMany({});
//     await Attachment.deleteMany({});

//     // 1. Create Users
//     const user1 = new User({
//       authId: "auth123",
//       username: "johnDoe",
//       profilePictureUrl: "https://example.com/picture1.jpg",
//     });
//     const user2 = new User({
//       authId: "auth456",
//       username: "janeDoe",
//       profilePictureUrl: "https://example.com/picture2.jpg",
//     });
//     await user1.save();
//     await user2.save();

//     // 2. Create Team
//     const team1 = new Team({
//       teamName: "Team Alpha",
//       productOwnerUserId: user1._id,
//       users: [user1._id, user2._id],
//     });
//     await team1.save();

//     // 3. Create Project
//     const project1 = new Project({
//       name: "Project A",
//       description: "This is project A description",
//       startDate: new Date(),
//     });
//     await project1.save();

//     // 4. Create Tasks
//     const task1 = new Task({
//       title: "Design the homepage",
//       description: "Design and layout of the homepage",
//       status: "In Progress",
//       priority: "High",
//       tags: ["UI/UX", "Design"],
//       startDate: new Date(),
//       dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
//       projectId: project1._id,
//       authorUserId: user1._id,
//     });
//     const task2 = new Task({
//       title: "Set up database",
//       description: "Set up MongoDB and models",
//       status: "Not Started",
//       priority: "Medium",
//       startDate: new Date(),
//       dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
//       projectId: project1._id,
//       authorUserId: user2._id,
//       assignedUserId: user1._id,
//     });
//     await task1.save();
//     await task2.save();

//     // 5. Create ProjectTeam
//     const projectTeam1 = new ProjectTeam({
//       teamId: team1._id,
//       projectId: project1._id,
//     });
//     await projectTeam1.save();

//     // 6. Create Task Assignments
//     const taskAssignment1 = new TaskAssignment({
//       userId: user1._id,
//       taskId: task1._id,
//     });
//     const taskAssignment2 = new TaskAssignment({
//       userId: user2._id,
//       taskId: task2._id,
//     });
//     await taskAssignment1.save();
//     await taskAssignment2.save();

//     // 7. Create Attachments
//     const attachment1 = new Attachment({
//       fileURL: "https://example.com/design.png",
//       fileName: "Homepage Design",
//       taskId: task1._id,
//       uploadedById: user1._id,
//     });
//     const attachment2 = new Attachment({
//       fileURL: "https://example.com/db-schema.png",
//       fileName: "Database Schema",
//       taskId: task2._id,
//       uploadedById: user2._id,
//     });
//     await attachment1.save();
//     await attachment2.save();

//     // 8. Create Comments
//     const comment1 = new Comment({
//       text: "Great progress on the homepage design!",
//       taskId: task1._id,
//       userId: user2._id,
//     });
//     const comment2 = new Comment({
//       text: "Need help setting up the MongoDB.",
//       taskId: task2._id,
//       userId: user1._id,
//     });
//     await comment1.save();
//     await comment2.save();

//     console.log("Database seeded successfully in cloud!");
//     process.exit();
//   } catch (error) {
//     console.error("Error seeding database:", error);
//     process.exit(1);
//   }
// };

// // Run the seed function
// seedDatabase();
