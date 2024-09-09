const server=require('./db')
var cors = require('cors')
const express = require('express')
const app = express()
const port = 5000

server()
app.use(express.json())


app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests only from frontend
  methods: 'GET, POST, PUT, DELETE', // Allow specific methods
  allowedHeaders: 'Content-Type, Authorization, auth-token', // Add allowed headers
  credentials: true, // Allow credentials like cookies or authentication headers
}));

app.use('/api/auth',require("./routes/userauth"))
app.use('/api/notes',require("./routes/notes"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})