class ProductsController < ApplicationController
  def index
    # Do we use jBuilder for all of this?
    @products = ProductsCollection.new.as_json
  end
end
