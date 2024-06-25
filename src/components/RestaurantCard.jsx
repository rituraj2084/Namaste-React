import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, costForTwo } = resData?.info;
  return (
    <div className="restaurant-card">
      <img src={CDN_URL + resData.info.cloudinaryImageId} alt="res-name" />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
