module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db');
        db.get_products().then(products => {
            res.status(200).send(products);
        })  
    },

    create: (req, res) => {
        const {image, productName, price} = req.body;
        const db = req.app.get('db')
        let data = db.create_product([image, productName, price])
        console.log(data)
        res.status(200).send(data)
    },

}
