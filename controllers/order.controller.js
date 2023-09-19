const db = require("../db.config");

const add = (req, res) => {
    new Promise((resolve, reject) => {
        const orderQuery = "insert into `order` set `date` = now(), ?";
        db.query(orderQuery, { userId: req.body.insertId, message: req.body.message }, (error, data) => {
            if (error) return res.send(error);
            resolve(data);
        });
    }).then((data) => {
        const query = `insert into product_order(orderId,productId,userId,quantity,productPrice, productDiscount) values ?`;
        const params = req.body.products.map((item) =>
            Object.values({ orderId: data.insertId, ...item })
        );
        db.query(query, [params], (error, data) => {
            if (error) return res.send(error);
            return res.json(data);
        });
    });
};

const getAll = (req, res) => {
    const query = "select * from `order`";
    db.query(query, (error, data) => {
        if (error) return res.send(error);
        return res.json(data);
    });
};

module.exports = {
    add,
    getAll,
};
