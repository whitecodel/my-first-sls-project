// src/handlers/auth/register.js
// Import the connect function from db.js
const { connect } = require('../../database/db');

// Import the User model
const User = require('../../models/User');

// Define the Lambda handler function
module.exports.handler = async (event, context) => {
    // Prevent hanging by setting callbackWaitsForEmptyEventLoop to false
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        // Ensure database connection
        await connect();

        // Check if request body exists
        if (!event.body) {
            // Return a 400 Bad Request response if no data provided
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/text',
                },
                body: 'No data provided',
            };
        }

        // Parse the request body JSON
        const { username, password } = JSON.parse(event.body);

        // Create a new user with provided username and password
        const user = await User.create({ username, password });

        // Return a 200 OK response indicating successful user registration
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/text',
            },
            body: 'User registered successfully'
        };
    } catch (err) {
        // Log any errors that occur during execution
        console.error('Error in user registration:', err);

        // Return a 500 Internal Server Error response
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
            },
            body: 'Something went wrong'
        };
    }
}