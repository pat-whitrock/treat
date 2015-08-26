$(document).ready(function() {
  ProductsApp.Views.LayoutView = Marionette.LayoutView.extend({
    template: ich.layout,

    regions: {
      actions: '#actions',
      products: '#products'
    },

    onRender: function() {
      var actions_view = new ProductsApp.Views.ActionsView;
      var products_view = new ProductsApp.Views.ProductsView({
        collection: this.collection
      });

      this.actions.show(actions_view);
      this.products.show(products_view);
    }
  });
});
