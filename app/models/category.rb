class Category
  TOP_LEVEL = [
    'accessories',
    'art',
    'bags_and_purses',
    'bath_and_beauty',
    'books_and_zines',
    'candles',
    'ceramics_and_pottery',
    'children',
    'clothing',
    'crochet',
    'dolls_and_miniatures',
    'everything_else',
    'furniture',
    'geekery',
    'glass',
    'holidays',
    'housewares',
    'jewelry',
    'knitting',
    'music',
    'needlecraft',
    'paper_goods',
    'patterns',
    'pets',
    'plants_and_edibles',
    'quilts',
    'supplies',
    'toys',
    'vintage',
    'weddings',
    'woodworking'
  ]

  def self.random
    TOP_LEVEL.sample
  end
end
