const fs = require("fs");
const path = require("path");
const rootDir = require("../../utils/path");
const dir = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (callback) => {
  return fs.readFile(dir, (err, file) => {
    if (err) {
      return callback([]);
    }
    callback(JSON.parse(file));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  static fetchAll = (callback) => {
    getProductsFromFile(callback);
  };

  save = () => {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(dir, JSON.stringify(products), (err) => {
        console.log("error es: ", err);
      });
    });
  };

  static findById = (id, callback) => {
    getProductsFromFile((products) => {
      const product = products.filter((product) => product.id === id);
      callback(product);
    });
  };
};
