this.TreatApp.module('ProductsApp', function(ProductsApp, App, Backbone, Marionette, $, _) {
  var API;

  API = {
    showIndex: function() {
      return ProductsApp.Controllers.Index.show();
    }
  };

  return ProductsApp.on('start', function() {
    debugger
    return API.showIndex();
  });
});
