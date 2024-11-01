// models/Job.js
// import mongoose from 'mongoose';

// const JobSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   company: { type: String, required: true },
//   location: { type: String, required: true },
//   description: { type: String, required: true },
//   category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, // Assuming you have categories
//   postedAt: { type: Date, default: Date.now },
// });

// export default mongoose.models.Job || mongoose.model('Job', JobSchema);

const mongoose = require("mongoose");

// Define a schema for your model
const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  category: String,
  postedAt: { type: Date, default: Date.now }
  // other fields as required
});

// Create the model
const Job = mongoose.models.Job || mongoose.model("Job", jobSchema, "Job_Portal_Test(Nextjs)");
// const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
