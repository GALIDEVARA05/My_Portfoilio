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

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Contact form route
app.post("/api/contact", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    subject,
    message,
    phone,
  } = req.body;



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

  try {
    const existing = await Contact.findOne({ email, message });
    if (existing) {
      return res.status(409).json({ message: "You already sent this message." });
    }

    const newContact = new Contact({
      name,
      email,
      phone: phone || "",
      subject,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: "Contact saved!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
