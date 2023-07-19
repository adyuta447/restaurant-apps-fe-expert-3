const assert = require("assert");

Feature("Liking restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("liking some restaurant", ({ I }) => {
  I.seeElement("#explore-restaurant");
  I.see("", "#explore-restaurant");

  I.amOnPage("/");

  for (let i = 1; i <= 3; i++) {
    I.waitForElement(".list_item_title a", 20);
    I.seeElement(".list_item_title a");
    I.click(locate(".list_item_title a").at(i));
    I.waitForElement("#likeButton", 20);
    I.seeElement("#likeButton");
    I.click("#likeButton");
    I.amOnPage("/");
  }

  I.amOnPage("/#/favorite");
  I.seeElement("#explore-restaurant");
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
  I.see("", "#explore-restaurant");
});
