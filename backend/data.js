import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'rizqi',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'user',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Meatball',
      slug: 'Meatball',
      category: 'foods',
      image: '', // 679px × 829px
      price: 24000,
      countInStock: 25,
      brand: 'UMKM',
      rating: 5,
      numReviews: 10,
      description: 'Delicios Foods',
    },
    {
      // _id: '2',
      name: 'Es Buah',
      slug: 'Es Buah',
      category: 'Drinks',
      image: '',
      price: 12000,
      countInStock: 25,
      brand: 'UMKM',
      rating: 5.0,
      numReviews: 10,
      description: 'Fresh Drinks',
    },
    
  ],
};
export default data;
