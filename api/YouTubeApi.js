// api.js

// Import axios library
const axios = require('axios');

// Define your API key
const API_KEY = 'AIzaSyDaDPZ0uGBJQ4VQSFOD1rQMRsK-MEsYsC4'; // Replace 'YOUR_API_KEY' with your actual YouTube Data API key

// Define the base URL for the YouTube Data API
const baseURL = 'https://www.googleapis.com/youtube/v3';

// Define a function to fetch videos from a channel on YouTube
async function fetchVideos() {
    try {
        // Make a GET request to the search.list endpoint
        const response = await axios.get(`${baseURL}/search`, {
            params: {
                key: API_KEY,
                part: 'snippet',
                channelId: 'UCVk2MHzjPLuSBgheW12dgjw', // Example channel ID
                type: 'video', // Specify to retrieve only videos
                maxResults: 10, // Example: Limit to 10 results
            },
        });

        // Log the response data
        console.log("Response", response.data);
    } catch (error) {
        // Handle any errors
        console.error('Error fetching videos:', error);
    }
}

// Call the fetchVideos function
fetchVideos();

module.exports = { fetchVideos }; // Export the fetchVideos function