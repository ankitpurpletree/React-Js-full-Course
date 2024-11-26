import React from 'react';

function Cart({ imageUrl, productName, description, onViewProfile, details, viewProfile}) {
  return (
    <div className="bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image Section */}
        <img
          src={imageUrl}
          alt={productName}
          className="w-full h-48 object-cover"
        />
        
        {/* Details Section */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-gray-800">{productName}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          
          {/* Button Section */}
          <button
            onClick={onViewProfile}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
           {viewProfile}
          </button>

          <button
            onClick={onViewProfile}
            className="mt-4 ml-5 bg-gray-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
           {details}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;


