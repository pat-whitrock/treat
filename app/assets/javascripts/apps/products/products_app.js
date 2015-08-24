var ProductsApp = new Marionette.Application();

ProductsApp.addRegions({
  productsRegion: '#products'
});

ProductsApp.Views = {};

ProductsApp.on('start', function() {
  // Create ProductsApp.Collections.ProductsCollection
  // Pass into this.Views.Index initialize
  return this.productsRegion.show(new this.Views.Index);
});
