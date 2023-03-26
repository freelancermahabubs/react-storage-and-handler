import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
 const [cosmetics, setCosmetics] = useState([]);
 useEffect(()=>{
fetch(`data.json`)
.then(res => res.json())
.then(data => setCosmetics(data))
 }, []);

 const total = getTotal(cosmetics)
  return (
  <>
  <h1 className='mt-8 text-2xl font-semibold mb-5 text-white bg-red-800 w-[75%] mx-auto rounded'>Welcome to our Cosmetics Store</h1>
  <p>Money Need: {total}</p>
    <div className='grid lg:grid-cols-3 px-12'>
      {
        cosmetics.map(cosmetic => <Cosmetic 
          key={cosmetic.id} 
          cosmetic = {cosmetic}
        />)
      }
    </div>
  </>
  );
};

export default Cosmetics;