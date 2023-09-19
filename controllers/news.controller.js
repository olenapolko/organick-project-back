const db = require("../db.config");

const getAllNews = (req, res) => {
    const query = "SELECT * FROM news";
    db.query(query, (error, data) => {
        if (error) return res.send(error);
        return res.json(data);
    });
};

const getNewsById = (req, res) => {
    const query = "SELECT * FROM news WHERE id = ?";
    db.query(query, [req.params.id], (error, data) => {
        if (error) return res.send(error);
        return res.json(data);
    });
};

const addNews = (req, res) => {
    const { author, title, text, date, imagePath } = req.body;
    const query = "INSERT INTO news (author, title, text, date, imagePath) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [author, title, text, date, imagePath], (error, data) => {
        if (error) return res.send(error);
        return res.json(data);
    });
};

module.exports = {
    getAllNews,
    getNewsById,
    addNews,
};
