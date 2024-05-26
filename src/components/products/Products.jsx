import React from 'react';
import './products.scss';

const products = [
  {
    name: 'Vegie Muffen',
    price: '$16',
    image: 'https://via.placeholder.com/150',
    rating: 3,
  },
  {
    name: 'Salads',
    price: '$12',
    image: 'https://via.placeholder.com/150',
    rating: 5,
  },
  {
    name: 'Burger',
    price: '$10',
    image: 'https://via.placeholder.com/150',
    rating: 4,
  },
  {
    name: 'Delmonico Steak dish',
    price: '$14',
    image: 'https://via.placeholder.com/150',
    rating: 2,
  },
  {
    name: 'Egg Masala',
    price: '$9',
    image: 'https://via.placeholder.com/150',
    rating: 4,
  },
  {
    name: 'Peach Melba dish',
    price: '$15',
    image: 'https://via.placeholder.com/150',
    rating: 3,
  },
];

function Products() {
  return (
    <div className="products">
      <header className="products-header">
        <h1>MENU</h1>
        <h2>Food Full of Treaty Love</h2>
        <p>
          There are many things needed to start the Fast Food Business. You need not only just Food Stalls
          with personnel but also specialized equipment and skills to manage customers.
        </p>
      </header>
      <div className="products-list">
        {products.map((item, index) => (
          <div key={index} className="product-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">{item.price}</p>
            <p className="description">There are many things needed to start the Fast Food Business.</p>
            <button className="add-button">+</button>
            <div className="rating">
              {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
            </div>
          </div>
        ))}
      </div>
      <button className="learn-more">Learn More</button>
    </div>
  );
}

export default Products;
