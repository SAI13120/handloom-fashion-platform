import chanderiImage from '../assets/chanderi.jpeg';
import ikatImage from '../assets/ikat.jpg';
import khadiImage from '../assets/khadi.jpg';

const products = [
  {
    id: 1,
    name: "Chanderi Saree",
    description: "A beautiful Chanderi saree with intricate designs.",
    price: 120.00,
    availability: "In Stock",
    category: "Sarees",
    imageUrl: chanderiImage, // Imported directly
  },
  {
    id: 2,
    name: "Ikat Scarf",
    description: "A handcrafted Ikat scarf with traditional patterns.",
    price: 45.00,
    availability: "In Stock",
    category: "Scarves",
    imageUrl: ikatImage, // Imported directly
  },
  {
    id: 3,
    name: "Khadi Bag",
    description: "A durable Khadi bag, perfect for everyday use.",
    price: 30.00,
    availability: "Out of Stock",
    category: "Bags",
    imageUrl: khadiImage, // Imported directly
  }
];

export default products;
