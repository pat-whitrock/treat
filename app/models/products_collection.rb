class ProductsCollection
  BATCH_SIZE = 25

  def as_json # or can we use jBuilder for all of this?
    products.map do |product|
      {
        name: product.name,
        image: product.image_url
      }
    end
  end

  private

  attr_reader :products

  def products
    # @products ||= Etsy::Product.get_active_products
  end
end
