$(document).ready(function() {
  ProductsApp.Views.ProductsView = Marionette.CollectionView.extend({
    childView: ProductsApp.Views.ProductView
  });
});
