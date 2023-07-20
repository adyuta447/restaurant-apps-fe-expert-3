import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";

let favoriteResto = [];

const FavoriteRestaurantArray = {
  getResto(id) {
    if (!id) {
      return undefined;
    }

    return favoriteResto.find((resto) => resto.id === id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty("id")) {
      return;
    }
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteResto.push(resto);
  },

  deleteResto(id) {
    favoriteResto = favoriteResto.filter((resto) => resto.id !== id);
  },
};

describe("Favorite Restaurant Array Contract Test Implementation", () => {
  afterEach(() => {
    favoriteResto = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);

  // Additional test cases can be added here to further test the FavoriteRestaurantArray implementation
});
