import fetch from "node-fetch";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Updated CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000", 
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

const SECRET_KEY = "6Lc9kY4qAAAAAPmz3zTEZFUsvLQ4vGgYIx9vuLvz"; 

app.post("/api/validate-captcha", async (req, res) => {
  const { "g-recaptcha-response": token } = req.body;

  if (!token) {
    return res.status(400).json({ success: false, message: "Token is required" });
  }

  try {
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    if (data.success) {
      return res.status(200).json({ success: true, message: "Captcha verified" });
    } else {
      return res.status(400).json({ success: false, message: "Captcha failed" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://dev.sevgs.no:${PORT}`);
});
