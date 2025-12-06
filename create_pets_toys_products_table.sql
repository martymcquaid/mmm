-- Create petsToysProducts table
CREATE TABLE petsToysProducts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL NOT NULL,
    category TEXT,
    image_url TEXT,
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index on category for better query performance
CREATE INDEX idx_petstoysproducts_category ON petsToysProducts(category);

-- Create index on in_stock for filtering available products
CREATE INDEX idx_petstoysproducts_in_stock ON petsToysProducts(in_stock);