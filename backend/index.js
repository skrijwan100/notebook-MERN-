const server=require('./db')
var cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

server()
require('dotenv').config();
app.use(express.json())


app.use(cors({
  origin: 'https://notebook-mern.vercel.app',  // Allow requests only from frontend
  methods: 'GET, POST, PUT, DELETE', // Allow specific methods
  allowedHeaders: 'Content-Type, Authorization, auth-token', // Add allowed headers
  credentials: true, // Allow credentials like cookies or authentication headers
}));

app.use('/api/auth',require("./routes/userauth"))
app.use('/api/notes',require("./routes/notes"))

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})