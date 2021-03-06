//Mongoose implemtation
const mongoose = require('mongoose');
const Product =require('../../model/product')
let uri = "mongodb://shoppingwebsite:shoppingwebsite1234@cluster0-shard-00-00-s7dg5.mongodb.net:27017,cluster0-shard-00-01-s7dg5.mongodb.net:27017,cluster0-shard-00-02-s7dg5.mongodb.net:27017/shoppingwebsite?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true});

const admin = async (req, res) => {
    const products=await Product.find().exec();
    res.render('admin/index', {products})
}

module.exports = admin;