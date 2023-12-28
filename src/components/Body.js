import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // State Variable - Super Powerful Variable
  // React Hook is normal Javascript function
  // useState is used to create state variables
  // It maintains the state of your component

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  // UseEffect is a normal JS Function, we pass call function and dependency array
  // useEffect will call after the component renders or as soon as render cycle completes it will call useEffect
  // Our browser is not allowing us to call swiggy's api from localhost from one origin to another origin
  // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const res = await data.json();
    const resturantDetails =
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(resturantDetails);
    setFilteredRestaurant(resturantDetails);
  };

  // Conditional Rendering

  return filteredRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            placeholder="Search here"
            onChange={(e) => {
              const val = e.target.value;
              setSearchVal(val);
            }}
            value={searchVal}
          ></input>
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              const filteredList = listOfRestaurants?.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchVal?.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Enter
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.0
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
