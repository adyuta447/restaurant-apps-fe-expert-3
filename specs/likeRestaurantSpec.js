import FavoriteRestaurantIDB from "../src/scripts/data/favorite-restaurant-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Liking A Restaurant", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  });

  afterEach(async () => {
    await FavoriteRestaurantIDB.deleteResto(1);
  });

  it("should show the like button when the restaurant has not been liked before", async () => {
    // Arrange
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Act & Assert
    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the restaurant has not been liked before", async () => {
    // Arrange
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Act & Assert
    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to like the restaurant", async () => {
    // Arrange
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Act
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const resto = await FavoriteRestaurantIDB.getResto(1);

    // Assert
    expect(resto).toEqual({ id: 1 });
  });

  it("should not add a restaurant again when it is already liked", async () => {
    // Arrange
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Add a restaurant with ID 1 to the list of liked restaurants
    await FavoriteRestaurantIDB.putResto({ id: 1 });

    // Act
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    // Assert
    // No duplicate restaurant added
    expect(await FavoriteRestaurantIDB.getAllResto()).toEqual([{ id: 1 }]);
  });

  it("should not add a restaurant when it has no id", async () => {
    // Arrange
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    // Act
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    // Assert
    expect(await FavoriteRestaurantIDB.getAllResto()).toEqual([]);
  });
});
