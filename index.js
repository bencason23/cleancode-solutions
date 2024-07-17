// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes');
const bookRoutes = require('./routes/BookRoute');
const borrowedBookRoutes = require('./routes/BorrowedBookRoute');
const returnedBookRoutes = require('./routes/ReturnedBookRoute'); // Import the returned book routes

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for CRUD operations from port 3001
const corsOptions = {
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specified CRUD methods
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// MongoDB Atlas connection
const MONGO_URI = 'mongodb+srv://bencason23:2s4CVftdnfKSKckr@cluster0.zvehgxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Failed to connect to MongoDB Atlas:', err));

// Routes
app.use('/user', userRoutes);
app.use('/books', bookRoutes); // Use book routes
app.use('/borrowed-books', borrowedBookRoutes); // Use borrowed book routes
app.use('/returned-books', returnedBookRoutes); // Use returned book routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
