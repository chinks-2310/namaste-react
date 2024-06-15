import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  // State Variable - Super Powerful Variable
  // React Hook is normal Javascript function
  // useState is used to create state variables
  // It maintains the state of your component

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  }

  const {setUserName, loggedInUser} = useContext(UserContext)

  // Conditional Rendering

  return filteredRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" filter flex">
        <div className="m-4 p-4">
          <input
            type="search"
            className="border border-solid border-black"
            placeholder="Search here"
            onChange={(e) => {
              const val = e.target.value;
              setSearchVal(val);
            }}
            value={searchVal}
            data-testid = "searchInput"
          ></input>
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              if (searchVal === "") {
                setFilteredRestaurant(listOfRestaurants);
              } else {
                const filteredList = listOfRestaurants?.filter((res) =>
                  res?.info?.name
                    ?.toLowerCase()
                    ?.includes(searchVal?.toLowerCase())
                );
                setFilteredRestaurant(filteredList);
              }
            }}
            disabled={searchVal === "" ? true : false}
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants?.filter(
                (restaurant) => restaurant?.info?.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>UserName: </label>
          <input value={loggedInUser} className="border border-black p-2" onChange={(e) => setUserName(e?.target?.value)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
            className="resturant-link"
          >
            {/** If the restaurant is promoted then add a promoted label to it  */}
            {!restaurant?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
