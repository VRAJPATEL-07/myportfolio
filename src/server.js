// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS if your frontend is on a different domain

async function sendMail(formData) {
  try {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password here
      },
    });

    const mailOptions = {
      from: formData.email,
      to: process.env.EMAIL_USER, // your receiving Gmail
      subject: 'Contact Form Submission',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Detailed Error:', error);
    throw error;
  }
}

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Route to handle email sending
app.post('/api/send', async (req, res) => {
  try {
    const result = await sendMail(req.body);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Error sending email');
  }
});

const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
