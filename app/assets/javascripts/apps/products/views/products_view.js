$(document).ready(function() {
  ProductsApp.Views.Products = Marionette.CollectionView.extend({
    template: ich.products

    // initialize: function(collection) {
    //   this.products = collection;
    // }

    // Instantiate a ProductsApp.Views.ProductView for each product
  });
});
