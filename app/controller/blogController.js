export const createBlog = (req, res) => {
    res.status(201).json({ message: 'Blog created successfully' });
};

export const readBlog = (req, res) => {
    res.status(200).json({ message: 'Blog read successfully' });
};

export const updateBlog = (req, res) => {
    res.status(200).json({ message: 'Blog update successfully' });
};

export const deleteBlog = (req, res) => {
    res.status(200).json({ message: 'Blog delete successfully' });
};
