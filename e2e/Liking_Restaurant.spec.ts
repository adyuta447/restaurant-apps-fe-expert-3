const assert = require("assert");

Feature("Liking restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("liking some restaurant", async ({ I }) => {
  I.seeElement("#explore-restaurant");
  I.see("", "#explore-restaurant");
  I.amOnPage("/");

  // array untuk menampung daftar nama restaurant yang di-like
  const titleLikeRestaurants = [];
  for (let i = 1; i <= 3; i++) {
    I.waitForElement(".list_item_title a", 20);
    I.seeElement(".list_item_title a");

    // menambahkan nama restaurant ke dalam array restaurant yang di-like
    const currentRestaurant = locate(".list_item_title a").at(i);
    titleLikeRestaurants.push(await I.grabTextFrom(currentRestaurant));
    I.click(currentRestaurant);

    I.waitForElement("#likeButton", 20);
    I.seeElement("#likeButton");
    I.click("#likeButton");
    I.amOnPage("/");
  }

  I.amOnPage("/#/favorite");
  I.seeElement("#explore-restaurant");

  // mengecek satu per satu bahwa daftar restaurant di halaman restaurant favorite ada di dalam array restaurant yang di-like
  for (let i = 1; i <= titleLikeRestaurants.length; i++) {
    I.waitForElement(".list_item_title a", 20);
    I.seeElement(".list_item_title a");

    const currentAlreadyLikeRestaurant = locate(".list_item_title a").at(i);
    const titleCurrentAlreadyLikeRestaurant = await I.grabTextFrom(
      currentAlreadyLikeRestaurant
    );

    // cek apakah nama restauran yang di-interasi ada di dalam halaman restaurant favorite
    // jika nama restaurant yang di-iterasi tidak ada dalam array restaurant yang di-like maka munculkan pesan error
    assert.ok(
      titleLikeRestaurants.includes(titleCurrentAlreadyLikeRestaurant),
      `${titleCurrentAlreadyLikeRestaurant} tidak ada di dalam daftar restaurant favorit`
    );
  }
});

Scenario("unlike one restaurant", ({ I }) => {
  // like dulu restonya

  I.amOnPage("/");
  I.seeElement("#explore-restaurant");
  I.waitForElement(".list_item_title a", 20);
  I.seeElement(".list_item_title a");
  I.click(locate(".list_item_title a").first());
  I.waitForElement("#likeButton", 20);
  I.click("#likeButton");
  I.amOnPage("/#/favorite");

  // unlike yang sudah di sukai tadi
  I.seeElement("#explore-restaurant");
  I.waitForElement(".list_item_title a", 20);
  I.seeElement(".list_item_title a");
  I.click(locate(".list_item_title a").first());
  I.waitForElement("#likeButton", 20);
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.dontSeeElement(".list_item_title");
});