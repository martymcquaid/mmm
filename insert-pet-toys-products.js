import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase URL and anon key
const supabaseUrl = process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

const petToysProducts = [
  {
    name: 'Interactive Ball Launcher',
    description: 'Automatic ball launcher for dogs, keeps them entertained for hours',
    price: 29.99,
    category: 'Toys',
    image_url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300'
  },
  {
    name: 'Catnip Mouse Set',
    description: 'Set of 3 catnip-filled mice toys for cats',
    price: 12.99,
    category: 'Toys',
    image_url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300'
  },
  {
    name: 'Rope Chew Toy',
    description: 'Durable rope toy for medium to large dogs',
    price: 8.99,
    category: 'Toys',
    image_url: 'https://images.unsplash.com/photo-1605629921116-1e3b0c8e4b9e?w=300'
  },
  {
    name: 'Feather Wand',
    description: 'Interactive feather wand toy for cats',
    price: 15.99,
    category: 'Toys',
    image_url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300'
  },
  {
    name: 'Squeaky Plush Toy',
    description: 'Soft squeaky toy in various animal shapes for dogs',
    price: 9.99,
    category: 'Toys',
    image_url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300'
  },
  {
    name: 'Puzzle Feeder Toy',
    description: 'Mental stimulation puzzle toy for dogs and cats',
    price: 24.99,
    category: 'Toys',
    image_url: 'https://images.unsplash.com/photo-1607633131385-9385f4ea9d5c?w=300'
  },
  {
    name: 'Laser Pointer Toy',
    description: 'Interactive laser pointer for cats',
    price: 7.99,
    category: 'Toys',
    image_url: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=300'
  },
  {
    name: 'Tug-of-War Rope',
    description: 'Heavy-duty rope for interactive play with dogs',
    price: 14.99,
    category: 'Toys',
    image_url: 'https://images.unsplash.com/photo-1605629921116-1e3b0c8e4b9e?w=300'
  },
  {
    name: 'Crinkle Ball Toy',
    description: 'Crinkle balls for cats, pack of 6',
    price: 6.99,
    category: 'Toys',
    image_url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300'
  },
  {
    name: 'Fetch Stick',
    description: 'Floating fetch stick for water-loving dogs',
    price: 11.99,
    category: 'Toys',
    image_url: 'https://images.unsplash.com/photo-1605629921116-1e3b0c8e4b9e?w=300'
  }
];

async function insertPetToysProducts() {
  try {
    console.log('Inserting pet toys products...');
    
    const { data, error } = await supabase
      .from('petsToysProducts')
      .insert(petToysProducts)
      .select();

    if (error) {
      console.error('Error inserting products:', error);
      return;
    }

    console.log('Successfully inserted products:', data);
    console.log(`Inserted ${data.length} products`);
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

insertPetToysProducts();