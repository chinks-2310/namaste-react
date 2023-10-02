import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable - Super Powerful Variable
  // React Hook is normal Javascript function
  // useState is used to create state variables
  // It maintains the state of your component

  const [listOfRestaurants, setListOfRestaurants] = useState(restrautList);
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (restaurant) => restaurant?.data?.avgRating >= 4.0
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">
        <input
          type="search"
          placeholder="Search here"
          onChange={(e) => {
            const val = e.target.value;
            setSearchVal(val);
          }}
        ></input>
        <button
          onClick={() => {
            const searchedList = listOfRestaurants.filter((restaurant) =>
              restaurant?.data?.name
                ?.toLowerCase()
                .includes(searchVal?.toLowerCase())
            );
            setListOfRestaurants(searchedList);
          }}
        >
          Enter
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard
            resData={restaurant?.data}
            key={restaurant?.data?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
