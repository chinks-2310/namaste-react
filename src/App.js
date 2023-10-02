import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/*
    1. Add a logo on the left side
    2. Add a search bar in middle
    3. Add User icon on right
    4. Add CSS to look it nice
*/

/**
 *
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - Restaurant Container
 *      - Restaurant Cards
 *        - Image
 *        - Name
 *        - Star Rating
 *        - Cuisines
 *        - Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const resData = {
  info: {
    id: "281469",
    name: "Lavonne",
    cloudinaryImageId: "emlehbuwgsmryxhwzhvq",
    locality: "St. Marks Road",
    areaName: "St. Marks Road",
    costForTwo: "₹750 for two",
    cuisines: ["Bakery", "Desserts"],
    avgRating: 4.6,
    feeDetails: {
      restaurantId: "281469",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 4400,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 4400,
    },
    parentId: "10530",
    avgRatingString: "4.6",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 4,
      serviceability: "SERVICEABLE",
      slaString: "27 mins",
      lastMileTravelString: "4.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-17 22:40:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹699",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/lavonne-st-marks-road-bangalore-281469",
    type: "WEBLINK",
  },
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
