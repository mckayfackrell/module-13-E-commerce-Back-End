// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through:{
    model: CHANGETHIS,
    unique: false
  },
  as: 'CHANGETHIS'
});

// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through:{
    model: CHANGETHIS,
    unique: false
  },
  as: 'ProductTag'
});


// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  through:{
    model: CHANGETHIS,
    unique: false
  },
  as: 'ProductTag'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
