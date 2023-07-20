import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantsSource {
  static async listResto() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      if (!response.ok) {
        throw new Error("Failed to fetch data from server.");
      }
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error("Error while fetching list of restaurants:", error);
      return []; // Return an empty array or appropriate default value on error
    }
  }

  static async detailResto(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (!response.ok) {
        throw new Error("Failed to fetch restaurant details from server.");
      }
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error("Error while fetching restaurant details:", error);
      return null; // Return null or appropriate default value on error
    }
  }

  static async searchResto(value) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(value));
      if (!response.ok) {
        throw new Error("Failed to fetch search results from server.");
      }
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error("Error while searching restaurants:", error);
      return []; // Return an empty array or appropriate default value on error
    }
  }

  static async reviewResto() {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW);
      if (!response.ok) {
        throw new Error("Failed to fetch restaurant reviews from server.");
      }
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error("Error while fetching restaurant reviews:", error);
      return {}; // Return an empty object or appropriate default value on error
    }
  }
}

export default RestaurantsSource;
