const axios = require("axios");

const fetchUsers = () => {
  return axios.get("/api/users");
};

const fetchRestaurants = () => {
  return axios.get("/api/restaurants");
};

const fetchReservations = (id) => {
    return axios.get(`/api/users/${id}/reservations`);
}

const deleteReservation = (reservationId) =>{
    return axios.delete(`/api/reservations/${reservationId}`);
}

const deleteUser = (user) =>{
  return axios.delete(`/api/users/${user.id}`);
}

const createReservation = async({userId, restaurantId}) => {
    const response = await axios.post(`/api/users/${userId}/reservations`, {
        restaurantId,
      });
    return response.data
}

const createUser = async(user) =>{
    const response = await axios.post("/api/users", user);
    return response.data
}

export {
    fetchUsers,
    fetchRestaurants,
    fetchReservations,
    deleteReservation,
    createReservation,
    createUser,
    deleteUser
}
