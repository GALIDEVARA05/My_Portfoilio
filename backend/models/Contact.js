// models/Contact.js

const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }, // auto timestamp for each message
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // one doc per email
  phone: { type: String },
  messages: [messageSchema], // array of messages
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
