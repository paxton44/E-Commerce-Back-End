// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


//Activity 26, 28 index.js each have a good example of how to lay out belongsTO, belongTOMany tags, Tags belongToMany Products

// Products belongsTo Category
Product.belongsTo(Category);


// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// make each category using activity 28 or 26 to arrange the flow to the backend
