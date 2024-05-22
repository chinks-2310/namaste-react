import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="m-4 p-4 w-[250px] h-[90%] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData?.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{resData?.name}</h3>
      <h4 className="overflow-hidden text-ellipsis whitespace-nowrap">{resData?.cuisines.join(", ")}</h4>
      <h4 className="restaurant-average-rating">{resData?.avgRating} stars</h4>
      <h4>{resData?.costForTwoString?.split(" ")[0]}</h4>
      <h4 className="restaurant-delivery-time">{resData?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher order component

// input - Restaurant Card ==>> Restaurant Card Promoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="absolute bg-black text-white mx-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}  />
      </div>
    )
  }
}

export default RestaurantCard;
