import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData?.cloudinaryImageId}
      />
      <h3 className="restaurant-name">{resData?.name}</h3>
      <h4 className="cuisines">{resData?.cuisines.join(", ")}</h4>
      <h4 className="restaurant-average-rating">{resData?.avgRating} stars</h4>
      <h4>{resData?.costForTwoString?.split(" ")[0]}</h4>
      <h4 className="restaurant-delivery-time">{resData?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
