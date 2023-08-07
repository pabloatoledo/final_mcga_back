const Products = require("../models/products");

const getStatus = (req, res) => {
    Products.find()
        .then((response) => res.status(200).json({ msg: "Connection OK"}))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}

const getAll = (req, res) => {
    Products.find()
        .then((data) => res.json({ data }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}

const getProductById = (req, res) => {
    const { productId } = req.params;
    Products.find({id: productId})
        .then((data) => res.json({ data }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}

const create = (req, res) => {
    const newProduct = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description
    };
    Products.create(newProduct)
      .then((data) => res.json({ msg: "Product in final MCGA was added with the data: ", data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const remove = (req, res) => {
    const { id } = req.params;
    Products.deleteOne({id})
      .then((data) => {
        if (data.length === 0) {
            return res.status(404).json({ msg: `Product not found by ID: ${id}` });
        } 
        return res.json({ msg: "Product deleted", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const update = (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    Products.findOneAndUpdate({ id: id }, updatedData, { new: true })
      .then((data) => {
        if (!data) {
          return res.status(404).json({ msg: `Product not found by ID: ${id}` });
        }
        return res.json({ msg: "Product updated", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error updating product: ${err.message}` }));
    };

module.exports = {
    getStatus,
    getAll,
    getProductById,
    remove,
    create,
    update,
};