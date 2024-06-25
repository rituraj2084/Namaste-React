import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/mockData';
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log('Clicked');
            const filteredRestaurant = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            // console.log(filteredRestaurant);
            setListOfRestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
