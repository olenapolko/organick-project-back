const db = require("../db.config");

const getAllProjects = (req, res) => {
    const query = "SELECT * FROM projects";
    db.query(query, (error, data) => {
        if (error) return res.send(error);
        return res.json(data);
    });
};

module.exports = {
    getAllProjects,
};
