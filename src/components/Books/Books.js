import React from 'react';
import { percentage } from '../../utilities/calculate';

const Books = () => {
  const first = 45;
  const second = 41;
  const total = percentage(first, second)
  return (
    <div>
      <h1>Welcome To our Book Store</h1>
      <p>Total Percentage: {total}</p>
    </div>
  );
};

export default Books;