//import mongoose, { Schema } from "mongoose";
var mongoose = require("mongoose");
var Schema = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    status: String,
    active: Boolean,
  },
  { timestamps: true }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket".ticketSchema);
