import { useState } from 'react';
import ExploreMenu from '../../componets/ExploreMenu/ExploreMenu';
import Header from '../../componets/Header/Header';
import './Home.css';
import FoodDisplay from '../../componets/Food Display/FoodDisplay';
import AppDownload from '../../componets/App Download/AppDownload';


const Home = () => {
  
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category = {category}/>
      <AppDownload />
    </div>
  )
}
export default Home
