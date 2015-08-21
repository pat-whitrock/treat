TreatApp.module('ProductsApp.Controllers', function(Controllers, App, Backbone, Marionette, $, _) {
  return Controllers.Index = {
    get: function() {
      return new Views.Index;
    },

    show: function() {
      var index_view = this.get()
      return App.productsRegion.show(index_view);
    }
  };
});
