// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Contact = require("./models/Contact"); // adjust path if needed

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (clean version, no deprecation warnings)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// Contact form route
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, subject, message, phone } = req.body;

  const name = `${firstName} ${lastName}`;

  // 1. Required fields
  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // 2. Email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // 3. Phone validation (optional but must be valid if provided)
  if (phone && !/^[0-9]{10}$/.test(phone)) {
    return res
      .status(400)
      .json({ error: "Invalid phone number. Must be exactly 10 digits." });
  }

  try {
    // Check if contact with this email already exists
    let contact = await Contact.findOne({ email });

    if (contact) {
      // push new message into messages array
      contact.messages.push({ subject, message });
      contact.phone = phone || contact.phone; // update phone if new one provided
      contact.name = name; // update name if needed
      await contact.save();

      return res.status(200).json({ message: "Message added successfully!" });
    } else {
      // create new document
      const newContact = new Contact({
        name,
        email,
        phone: phone || "",
        messages: [{ subject, message }],
      });

      await newContact.save();
      return res.status(201).json({ message: "Contact created and message saved!" });
    }
  } catch (error) {
    console.error("Error saving contact:", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
