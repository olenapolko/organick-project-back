const db = require('../db.config');

const getAll = (req, res)=>{
    const query = 'select * from product';
    const q ='select product.id,categoryId, category.categoryName, productName, `description`,fullDescription, exstraInformation,price , discount, star, imagePath from product inner join category on product.categoryId=category.id;'
    db.query(q, (error, data)=>{
        if(error) return res.send(error);
        return res.json(data);
    });
}

const getById=(req, res)=>{
    const query = `select * from product where id =?`;
    db.query(query, req.params.id, (error, data)=>{
        if(error) return res.send(error);
        return res.json(data);
    })
}

const remove=(req, res)=>{
    const query = `delete from product where id =?`;
    db.query(query,[req.params.id], (error, data)=>{
        if(error) return res.send(error);
        return res.json(data);
    })
}
const add = (req, res)=>{
    const query = `insert into product set ?`;
    const params = {...req.body};
    db.query(query, params, (error, data)=>{
       if(error) return res.send(error);
       return res.json(data);
    } )
}

const update = (req, res)=>{
     const query = `update product set ? where id=?`;
     db.query(query,[{...req.body}, req.params.id],(error, data)=>{
        if(error) return res.send(error);
        return res.json(data);
     } )
}

module.exports ={
    getAll,
    getById,
    add,
    remove,
    update
}

