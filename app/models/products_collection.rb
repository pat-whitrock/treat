class ProductsCollection
  BATCH_SIZE = 25

  def as_json
    products.map do |product|
      {
        image_url: product.image_url,
        name: product.name
      }
    end
  end

  private

  def products
    @products ||= Etsy::Listing.find_all_active_by_category(Category.random).map do |listing|
      Product.new name: listing.title, image_url: listing.image.full
    end
  end
end
