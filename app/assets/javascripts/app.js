this.TreatApp = (function(Backbone, Marionette) {
  var App = new Marionette.Application;

  App.addRegions({
    productsRegion: '#products'
  });

  return App.on('initialize:after', function() {
    if (Backbone.history) {
      return Backbone.history.start();
    }
  });
})(Backbone, Marionette);
