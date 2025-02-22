const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// MongoDB connection
const uri = "mongodb+srv://fitbellpvtltd:EKwnbwjTNybothZX@cluster0.isvp2.mongodb.net/fitbell?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fitbell.pvt.ltd@gmail.com", // Replace with your email
    pass: "fitbell1234", // Replace with your email password
  },
  tls: {
    rejectUnauthorized: false, // Disable strict certificate validation
  },
});

// User Registration
app.post("/auth/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists. Please log in." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Send Welcome Email
    const mailOptions = {
      from: "fitbell.pvt.ltd@gmail.com", // Replace with your email
      to: email,
      subject: "Welcome to FitBell",
      text: `Hi ${username},\n\nThank you for joining FitBell! We're excited to have you on board.\n\nBest regards,\nFitBell Team`,
    };

    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});

// User Login
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found. Please sign up." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    res.status(200).json({ message: "Login successful", username: user.username });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
