const db=require('../config/db');

exports.createBlog=async (req,res)=>{
    const { title, content, image,category } = req.body;
    const userId = req.user.id; 
    try {
        const [result] = await db.query('INSERT INTO blogs (title, content, image,category) VALUES (?, ?, ?,?)', [title, content, image,category]);
        res.status(201).json({ message: 'Blog created successfully', blogId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.getBlogs=async (req,res)=>{
    try {
        const [rows] = await db.query('SELECT * FROM blogs');
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
exports.getBlogsByCategory=async (req,res)=>{
    const category = req.params.category;
    try {
        const [rows] = await db.query('SELECT * FROM blogs WHERE category = ?', [category]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
exports.getBlogById=async (req,res)=>{
    const blogId = req.params.id;
    try {
        const [rows] = await db.query('SELECT * FROM blogs WHERE id = ?', [blogId]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
exports.updateBlog=async (req,res)=>{
    const blogId = req.params.id;
    const { title, content, image,category } = req.body;
    try {
        const [result] = await db.query('UPDATE blogs SET title = ?, content = ?, image = ?, category = ? WHERE id = ?', [title, content, image,category, blogId]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
exports.deleteBlog=async (req,res)=>{
    const blogId = req.params.id;
    try {
        const [result] = await db.query('DELETE FROM blogs WHERE id = ?', [blogId]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}