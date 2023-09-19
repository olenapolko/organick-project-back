const db = require("../db.config");

const getAllExperts = (req, res) => {
    const query = "select * from experts";
    db.query(query, (error, data) => {
        if(error) return res.send(error);
        return res.json(data);
    });
};

const getExpertById = (req, res) => {
    const query = "select * from experts where id = ?";
    db.query(query, [req.params.id], (error, data) => {
        if (error) return res.send(error);
        return res.json(data);
    });
};

const addExpert = (req, res) => {
    const query = "insert into experts set ?";
    const params = { ...req.body };

    db.query(query, params, (error, data) => {
        if (error) return res.send(error);
        return res.json(data);
    });
};

module.exports = {
    getAllExperts,
    getExpertById,
    addExpert
};
