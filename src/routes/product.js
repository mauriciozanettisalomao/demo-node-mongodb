const express = require('express');
const Product = require('../models/product');
const Log = require('../models/log');
const router = new express.Router();

router.post('/products', async (req, res) => {
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    }catch(e){
        const log = new Log({
            code: 'product-create',
            description: e.toString(),
            type: 'error',
            date: new Date()
        })
        log.save();
        res.status(500).send(log);
    }
});

router.get('/products', async (req, res) => {
    
    try{
        const product = await Product.find();
        res.status(200).send({});
    }catch(e){
        const log = new Log({
            code: 'product-read',
            description: e.toString(),
            type: 'error',
            date: new Date()
        })
        log.save();
        res.status(500).send(log);
    }
    
});

router.patch('/products/:id', async (req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if (!product){
            res.status(204).send({});
        }
        res.status(200).send(product);
    }catch(e){
        const log = new Log({
            code: 'product-update',
            description: e.toString(),
            type: 'error',
            date: new Date()
        })
        log.save();
        res.status(500).send(log);
    }
});

router.delete('/products/:id', async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product){
            res.status(204).send({});
        }
        res.status(200).send(product);
    }catch(e){
        const log = new Log({
            code: 'product-update',
            description: e.toString(),
            type: 'error',
            date: new Date()
        })
        log.save();
        res.status(500).send(log);
    }
});

module.exports = router;