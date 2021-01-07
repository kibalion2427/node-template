const db = require("../utils/database");
module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  static fetchAll = () => {
    return db.execute("SELECT*FROM PRODUCTS");
  };

  save = () => {
    return db.execute(
      "INSERT INTO products(title, price, description, imageurl) VALUES(?,?,?,?)",
      [this.title, this.price, this.description, this.imageUrl]
    );
  };

  static findById = (id) => {
    return db.execute("SELECT * FROM PRODUCTS WHERE products.id = ?", [id]);
  };
};
