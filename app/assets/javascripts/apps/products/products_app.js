var ProductsApp = new Marionette.Application();

ProductsApp.addRegions({
  productsRegion: '#products'
});

ProductsApp.on('start', function() {
  return this.productsRegion.show(new this.Views.Index);
});
