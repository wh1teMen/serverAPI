const express = require('express');
var app = express();
const router = express.Router();
const fs = require('fs');
//====================GET=================================

router.get('/product', (req, res) => {
    fs.readFile('./data/products.json', (err, data) => {
        if (err) {
            res.status(500).json({ error: "cannot read file" });
            return;
        }
        res.set('Content-Type', 'application/json');
        let tmpObj = JSON.parse(data);
        //  res.status(200).send(data);
        let pro = "";
        for (let i = 0; i < tmpObj.length; i++) {
            pro += tmpObj[i].title + "\n";
        }
        res.status(200).send(pro);
        console.log('Сработал первый метод GET');
       
      
    })
});
router.get('/product/:id', (req, res) => {
    fs.readFile('./data/products.json', (err, data) => {
        if (err) {
            res.status(500).json({ error: "cannot read file" });
            return;
        }
        let products = JSON.parse(data);
        // let product = products.find((el) => el.id == req.params.id);
        // if (!product) {
        //     res.status(404).json({ error: "product not found!!!!" });
        //     return;
        // }

        // res.status(200).json(product);

        // res.send(product)
        let pro = "";
        for (let i = 0; i <  products.length; i++) {
            pro +=  products[i].price+' ';
        }
        console.log('Сработал второй метод GET')
        res.status(200).json(pro);
    })
});
//===================POST================================
router.post('/product', (req, res) => {
    fs.readFile('./data/products.json', (err, data) => {
        if (err) {
            res.status(500).json({ error: "cannot read file" });
            return;
        }
        if (!req.body.title) {
            res.status(400).json({ error: '"title is requered"' });
            return;
        }
        if (!req.body.price) {
            res.status(400).json({ error: '"price is requered"' });
            return;
        }
        let products = JSON.parse(data);
        let nextIndex = products[products.length - 1].id + 1;
        let newProduct = {
            "id": nextIndex,
            "title": req.body.title,
            "price": req.body.price
        }
        products.push({
            newProduct
        })
        res.status(201).json({ created: newProduct })

    })
});



module.exports = router;
// 