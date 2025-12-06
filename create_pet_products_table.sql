-- Create pet_products table with proper constraints and indexes
CREATE TABLE IF NOT EXISTS pet_products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC NOT NULL CHECK (price >= 0),
    original_price NUMERIC CHECK (original_price >= 0),
    image_url TEXT,
    category TEXT,
    tags TEXT[],
    rating NUMERIC DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    review_count INTEGER DEFAULT 0 CHECK (review_count >= 0),
    in_stock BOOLEAN DEFAULT true,
    features TEXT[],
    sizes TEXT[],
    colors TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_pet_products_category ON pet_products(category);
CREATE INDEX IF NOT EXISTS idx_pet_products_price ON pet_products(price);
CREATE INDEX IF NOT EXISTS idx_pet_products_rating ON pet_products(rating);
CREATE INDEX IF NOT EXISTS idx_pet_products_in_stock ON pet_products(in_stock);
CREATE INDEX IF NOT EXISTS idx_pet_products_created_at ON pet_products(created_at);

-- Create GIN index for array columns (tags, features, sizes, colors)
CREATE INDEX IF NOT EXISTS idx_pet_products_tags ON pet_products USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_pet_products_features ON pet_products USING GIN(features);
CREATE INDEX IF NOT EXISTS idx_pet_products_sizes ON pet_products USING GIN(sizes);
CREATE INDEX IF NOT EXISTS idx_pet_products_colors ON pet_products USING GIN(colors);

-- Create trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_pet_products_updated_at 
    BEFORE UPDATE ON pet_products 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();