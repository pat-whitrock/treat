class ProductsController < ApplicationController
  def index
    @products = ProductsCollection.new.as_json
  end
end
