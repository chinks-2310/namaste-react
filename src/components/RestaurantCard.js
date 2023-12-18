import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ name, cuisine, resData }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData?.cloudinaryImageId}
      />
      <h3>{resData?.name}</h3>
      <h4 className="cuisines">{resData?.cuisines.join(",")}</h4>
      <h4>{resData?.avgRating} stars</h4>
      <h4>{resData?.costForTwoString?.split(" ")[0]}</h4>
      <h4>{resData?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
