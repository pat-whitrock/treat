class ProductsController < ApplicationController
  def index
    @products = ProductsCollection.new
  end
end
