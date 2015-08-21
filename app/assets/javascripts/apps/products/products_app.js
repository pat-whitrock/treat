var ProductsApp = new Marionette.Application();

ProductsApp.addRegions({
  productsRegion: '#products'
});

ProductsApp.Views = {};

ProductsApp.on('start', function() {
  return this.productsRegion.show(new this.Views.Index);
});
