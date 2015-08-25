$(document).ready(function() {
  ProductsApp.Collections.ProductsCollection = Backbone.Collection.extend({
    model: ProductsApp.Models.Product
  });
});
