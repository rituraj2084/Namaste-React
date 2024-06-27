import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
