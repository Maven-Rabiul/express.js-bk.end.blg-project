import express from 'express';
import * as blogController from '../app/controller/blogController.js';

const router = express.Router();

// Defining  routes
router.post('/create-blog', blogController.createBlog); // Create a new blog
router.get('/read-blog', blogController.readBlog); // Read a blog
router.put('/update-blog', blogController.updateBlog); // Update a blog
router.delete('/delete-blog', blogController.deleteBlog); // Delete a blog

export default router;