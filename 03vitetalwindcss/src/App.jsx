// import './App.css';
// import Cart from './Cart';

// function App() {
//   const products = [
//     {
//       id: 1,
//       imageUrl: 'https://via.placeholder.com/150', // Replace with a valid image URL
//       productName: 'Product 1',
//       description: 'This is a short description for Product 1.',
//       details: 'View Details',
//       viewProfile: 'View Profile',
//     },
//     {
//       id: 2,
//       imageUrl: 'https://via.placeholder.com/150',
//       productName: 'Product 2',
//       description: 'This is a short description for Product 2.',
//       details: 'View Details',
//       viewProfile: 'View Profile',
//     },
//     {
//       id: 3,
//       imageUrl: 'https://via.placeholder.com/150',
//       productName: 'Product 3',
//       description: 'This is a short description for Product 3.',
//       details: 'View Details',
//       viewProfile: 'View Profile',
//     },
//   ];
//   const handleViewProfile = () => {
//     alert('View Profile Clicked!');
//   }
//   return (
//     <>
//       <h1 className="bg-red-400 text-blue p-4 rounded-xl ml-5 mr-5">Tailwind CSS Practice</h1>
   
//       <Cart
//         imageUrl="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" // Replace with actual image URL
//         productName="Code Evaluation"
//         description="This is a short description of the product."
//         onViewProfile={handleViewProfile}
//         details="vey good"
//         viewProfile='View Detais'
//       />

//       <Cart  productName="Ankit Mishra"/>
//     </>
//   );
// }


// export default App;


import React from 'react';
import './App.css';
import Cart from './Cart';

function App() {
  const products = [
    {
      id: 1,
      imageUrl: 'https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp', // Replace with a valid image URL
      productName: 'Product 1',
      description: 'This is a short description for Product 1.',
      details: 'View Details',
      viewProfile: 'View Profile',
    },
    {
      id: 2,
      imageUrl: 'https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp',
      productName: 'Product 2',
      description: 'This is a short description for Product 2.',
      details: 'View Details',
      viewProfile: 'View Profile',
    },
    {
      id: 3,
      imageUrl: 'https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp',
      productName: 'Product 3',
      description: 'This is a short description for Product 3.',
      details: 'View Details',
      viewProfile: 'View Profile',
    },
  ];

  const handleViewProfile = (productName) => {
    alert(`View Profile for ${productName} clicked!`);
  };

  return (
    <div className="App">
      <h1 className="bg-red-400 text-blue-800 p-4 rounded-xl ml-5 mr-5">
        Tailwind CSS Practice
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <Cart
            key={product.id}
            imageUrl={product.imageUrl}
            productName={product.productName}
            description={product.description}
            details={product.details}
            viewProfile={product.viewProfile}
            onViewProfile={() => handleViewProfile(product.productName)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
