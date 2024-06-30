const path = require('path');
const Item = require('../modals/post');

exports.viewPage =(req,res) => {
    res.render('admin',{title : 'Create Post - Posty'})
}

exports.addItem =(req,res)=>{
    let {title,description,image} = req.body;
    Item
    .create({
        title,
        description,
        image,
        userId : req.user
    })
    .then(()=> res.redirect('/'))
    .catch((err) => res.render('error'))
    }

exports.viewItems =(req,res) => {
    Item
    .findAll({
        order : [['createdAt',"DESC"]]
    })
    .then((data)=>{
        res.render('home',{
            title : "Homepage",
            posts : data
        })
    })
    .catch((err) => res.render('error'))
}

exports.viewItemDetail = (req,res) => {
    let id = Number(req.params.itemId);
    Item
    .findByPk(id)
    .then((data) => {
        res.render('detail',{
            post : data,
        })
    })
    .catch((err) => res.render('error'))
}

exports.viewItemPage = (req,res) => {
    let id = Number(req.params.itemId);
    Item
    .findByPk(id)
    .then((data) => {
        res.render('update-admin',{
            post : data,
        })
    })
    .catch((err) => res.render('error'))
}

exports.updateItem = (req,res) => {
    let id = Number(req.params.itemId);
    let {title,description,image} = req.body;
    Item
    .findByPk(id)
    .then((data) => {
        data.title = title,
        data.description = description,
        data.image = image
        return data.save();
    })
    .then(() => res.redirect('/'))
    .catch((err) => res.render('error'))
}

exports.deleteItem = (req,res) => {
    let id = Number(req.params.itemId);
    Item
    .destroy({
        where :{
            id,
        }
    })
    .then(() => {
        res.redirect('/');
    })
    .catch(() => res.render('error'))
}