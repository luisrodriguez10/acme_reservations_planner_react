import React from "react";

const Restaurants = ({restaurants}) => {
    return (
      <ul>
        {restaurants.map((restaurant) => {
          return <li key={restaurant.id}>{restaurant.name}</li>;
        })}
      </ul>
    );
  };

  export default Restaurants;