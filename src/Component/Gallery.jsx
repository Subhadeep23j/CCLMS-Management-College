// Gallery.jsx
import React, { useState } from 'react';
import photo1 from '../assets/main-bulding.jpg'; // Example image import
import photo2 from '../assets/sports.jpg'; // Example image import
import photo3 from '../assets/ComputerlAB.jpg'; // Example image import
import photo4 from '../assets/Foodfas.jpg'; // Example image import
import photo5 from '../assets/Library.jpg'; // Example image import
import photo6 from '../assets/foodpro.jpg'; // Example image import
import photo7 from '../assets/Garden.jpg'; // Example image import
import photo8 from '../assets/seminarhall1.jpg'; // Example image import
import photo9 from '../assets/Fastival.jpg'; // Example image import


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Campus Main Building',
      category: 'campus',
      description: 'The iconic main building of our college campus.',
      image: photo1
    },
    {
      id: 2,
      title: 'Annual Sports Day',
      category: 'events',
      description: 'Students participating in our annual sports competition.',
      image: photo2
    },
    {
      id: 3,
      title: 'Computer Lab',
      category: 'facilities',
      description: 'Our state-of-the-art computer laboratory with 50 workstations.',
      image: photo3
    },  
    {
      id: 4,
      title: 'Food Festival',
      category: 'events',
      description: 'Students celebrating their academic achievements.',
      image: photo4
    },
    {
      id: 5,
      title: 'Library',
      category: 'facilities',
      description: 'Our extensive library with over 20,000 books and digital resources.',
      image: photo5
    },
    {
      id: 6,
      title: 'Food Production',
      category: 'events',
      description: 'Students showcasing their innovative food macking.',
      image: photo6
    },
    {
      id: 7,
      title: 'Campus Gardens',
      category: 'campus',
      description: 'The beautiful landscaped gardens on our campus.',
      image: photo7
    },
    {
      id: 8,
      title: 'Seminar Hall',
      category: 'facilities',
      description: 'Modern seminar hall equipped with audio-visual facilities.',
      image: photo8
    },
    {
      id: 9,
      title: 'Cultural Festival',
      category: 'events',
      description: 'Annual cultural festival showcasing student talents.',
      image: photo9
    },
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'campus', name: 'Campus' },
    { id: 'events', name: 'Events' },
    { id: 'facilities', name: 'Facilities' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="font-sans">
      {/* Gallery Banner */}
      <div className="bg-blue-700 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">College Photo Gallery</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Explore the vibrant life at Contai College through our collection of images
        </p>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-md transition duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-blue-50 hover:bg-blue-100 text-gray-800'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
