import FavoriteRestaurantIDB from "../src/scripts/data/favorite-restaurant-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Unliking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIDB.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIDB.deleteResto(1);
  });

  it("should display unlike widget when the restaurant has been liked", async () => {
    // Arrange
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Act & Assert
    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy();
    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy();
  });

  it("should not display like widget when the restaurant has been liked", async () => {
    // Arrange
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Act & Assert
    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy();
    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy();
  });

  it("should be able to remove liked restaurant from the list", async () => {
    // Arrange
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Act
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event("click"));

    // Assert
    expect(await FavoriteRestaurantIDB.getAllResto()).toEqual([]);
  });

  it("should not throw error if the unliked restaurant is not in the list", async () => {
    // Arrange
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Remove the restaurant from the list
    await FavoriteRestaurantIDB.deleteResto(1);

    // Act
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event("click"));

    // Assert
    expect(await FavoriteRestaurantIDB.getAllResto()).toEqual([]);
  });
});
