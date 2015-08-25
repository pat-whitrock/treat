var ProductsApp = new Marionette.Application();

ProductsApp.addRegions({
  mainRegion: '#main-content'
});

ProductsApp.Collections = {};
ProductsApp.Models = {};
ProductsApp.Views = {};

ProductsApp.on('start', function(products) {
  var products_collection = new this.Collections.ProductsCollection(products);
  var layout = new this.Views.LayoutView(products_collection);

  return this.mainRegion.show(layout);
});
