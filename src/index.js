const api = require("./api");
const state = {};
const restaurantsList = document.querySelector("#restaurants-list");
const usersList = document.querySelector("#users-list");
const reservationsList = document.querySelector("#reservations-list");
const form = document.querySelector("form");

const fetchUsers = async () => {
  const response = await api.fetchUsers();
  state.users = response.data;
};

const fetchRestaurants = async () => {
  const response = await api.fetchRestaurants();
  state.restaurants = response.data;
};

const renderUsers = () => {
  const id = window.location.hash.slice(1) * 1;
  const html = state.users
    .map((user) => {
      return `
            <li>
                <a href='#${user.id}'>
                    ${user.name}
                </a>
            </li>
        `;
    })
    .join("");
  usersList.innerHTML = html;
};

const renderRestaurants = () => {
  const html = state.restaurants
    .map((restaurant) => {
      return `
              <li>
                  ${restaurant.name}
              </li>
          `;
    })
    .join("");
  restaurantsList.innerHTML = html;
};

const start = async () => {
  console.log("hello");
  await fetchUsers();
  await fetchRestaurants();
  renderUsers();
  renderRestaurants();
};

start()