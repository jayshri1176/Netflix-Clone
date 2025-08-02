const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const myListRoutes = require('./routes/myListRoutes');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/mylist', myListRoutes);

// MongoDB Connection
mongoose.connect('mongodb+srv://jayshrishirsath1176:Jaya1176@grocerycluster.kvwwraq.mongodb.net/?retryWrites=true&w=majority&appName=GroceryCluster')
  .then(() => {
    console.log('MongoDB Connected...');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });
