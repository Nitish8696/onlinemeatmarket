import React from 'react'
import Slider from "./Slider";
import Categories from './Categories';
import BestSelling from './BestSelling';
import Arrival from './Arrival';
import Bestdeal from './Bestdeal';
import Combo from './Combo';
const Home = () => {
  return (
    <div >
      <Slider />
      <Categories />
      <BestSelling />
      <Arrival />
      <Bestdeal />
      <Combo />
    </div>
  )
}

export default Home
