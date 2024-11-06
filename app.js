import express from 'express';
import apiRoutes from './routes/api.js'; // Importing the routes
import config from './app/config/config.js'; // Import the config

const app = express();
const PORT = config.port; // Fixed port

app.use(express.json()); // Middleware to parse JSON

// Use the API routes from api.js
app.use('/api/blogs', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is Swimming on port ${PORT}`);
});