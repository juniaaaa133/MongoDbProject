const path = require('path')

let items = [];

exports.viewPage =(req,res) => {
    res.render('admin',{title : 'Create Item - Shopii'})
}

exports.addItem =(req,res)=>{
    let data = req.body;
    items.push({
        id : Math.random(),
        ...data,
    })
    console.log(items)
    res.redirect('/');
    }

exports.viewItems =(req,res) => {
    res.render('home',{title : 'HomePage',items})
}

exports.viewItemDetail = (req,res) => {
    let id = Number(req.params.itemId);
    let item = items.find(item =>item.id === id);
    res.render('detail',{item})
}