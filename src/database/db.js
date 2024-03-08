// src/database/db.js

const mongoose = require('mongoose');

// Variable to hold the database connection
let connection = null;

// Function to connect to the database
const connect = async () => {
    // Log the MongoDB URI from environment variables
    console.log('Connecting to MongoDB:', process.env.MONGO_URI);

    // If connection is already established, return it
    if (connection !== null) return connection;

    try {
        // Connect to MongoDB using Mongoose
        connection = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });

        // Log successful connection
        console.log('Database connected');

        // Return the database connection
        return connection;
    } catch (err) {
        // Log any errors that occur during connection
        console.error('Error connecting to database:', err);

        // Return the error
        return err;
    }
}

// Export the connect function for use in other modules
module.exports = { connect };