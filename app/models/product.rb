class Product
  attr_reader :image_url, :title

  def initialize image_url:, title:
    @image_url = image_url
    @title = title
  end
end
