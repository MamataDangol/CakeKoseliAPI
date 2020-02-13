const express = require('express');
const Product = require('../models/products');

const router = express.Router();

router.get('/allProducts',(req,res,next)=>{
    Product.find({},(err,product)=>
    {
        if(err){
            res.json(next)
        }
        res.json(product)
    });
})

router.get('/catCakes',(req,res,next)=>{
    Product.find({productCategory: "Cakes"},(err,product)=>
    {
        console.log(product)
        if(err){
            res.json(next)
        }
        res.json(product)
    });
})

router.get('/catFlowers',(req,res,next)=>{
    Product.find({productCategory: "Flowers"},(err,product)=>
    {
        console.log(product)
        if(err){
            res.json(next)
        }
        res.json(product)
    });
})

router.get('/catTeddy',(req,res,next)=>{
    Product.find({productCategory: "Teddy"},(err,product)=>
    {
        console.log(product)
        if(err){
            res.json(next)
        }
        res.json(product)
    });
})

router.get('/catCombos',(req,res,next)=>{
    Product.find({productCategory: "Combos"},(err,product)=>
    {
        console.log(product)
        if(err){
            res.json(next)
        }
        res.json(product)
    });
})


module.exports = router;