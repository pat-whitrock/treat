$(document).ready(function() {
  ProductsApp.Views.ProductView = Marionette.ItemView.extend({
    template: ich.product,
    className: 'wrapper'
  });
});
