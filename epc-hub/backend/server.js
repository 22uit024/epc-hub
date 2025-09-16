import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));

// Models
const QuoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  projectType: String,
  description: String,
  budget: String,
}, {
  timestamps: true // This adds createdAt and updatedAt fields automatically
});
const Quote = mongoose.model("Quote", QuoteSchema);

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
}, {
  timestamps: true // This adds createdAt and updatedAt fields automatically
});
const Contact = mongoose.model("Contact", ContactSchema);

// Routes

// GET Routes to view data
app.get("/api/quotes", async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ _id: -1 }); // Sort by newest first
    res.json({ 
      success: true, 
      count: quotes.length,
      data: quotes 
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ _id: -1 }); // Sort by newest first
    res.json({ 
      success: true, 
      count: contacts.length,
      data: contacts 
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Dashboard endpoint to get all data summary
app.get("/api/dashboard", async (req, res) => {
  try {
    const quotesCount = await Quote.countDocuments();
    const contactsCount = await Contact.countDocuments();
    const recentQuotes = await Quote.find().sort({ _id: -1 }).limit(5);
    const recentContacts = await Contact.find().sort({ _id: -1 }).limit(5);
    
    res.json({
      success: true,
      summary: {
        totalQuotes: quotesCount,
        totalContacts: contactsCount
      },
      recentQuotes,
      recentContacts
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST Routes
app.post("/api/quotes", async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    await newQuote.save();
    res.json({ success: true, message: "Quote submitted successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
