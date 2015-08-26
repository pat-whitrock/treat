class ProductsCollection
  BATCH_SIZE = 25

  def as_json
    products.map do |product|
      {
        image_url: product.image_url,
        title: product.title
      }
    end
  end

  private

  def fetch_listings
    Etsy::Listing.find_all_active_by_category Category.random, limit: BATCH_SIZE
  end

  def products
    @products ||= fetch_listings.map do |listing|
      Product.new title: listing.title, image_url: listing.image.full
    end
  end
end
