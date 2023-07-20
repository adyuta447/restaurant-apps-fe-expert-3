import CONFIG from '../../globals/config';

const createRestaurantsItemTemplate = (restaurant) => `
  <div tabindex="0" class="list_item">
    <img tabindex="0" class="list_item_thumb" loading="lazy" src="${
      CONFIG.BASE_IMAGE + restaurant.pictureId
    }" alt="${restaurant.name}" title="${restaurant.name}">
    <div tabindex="0" class="city">${restaurant.city}</div>
    <div tabindex="0" class="list_item_content">
      <p class="list_item_rating">
        Rating :
        <b class="list_item_rating_value">${restaurant.rating}</b>
      </p>
      <h1 class="list_item_title"><a href="/#/detail/${restaurant.id}">${
  restaurant.name
}</a></h1>
      <div class="list_item_desc">${restaurant.description.slice(
        0,
        150,
      )}...</div>
    </div>
  </div>
`;

const createRestaurantsDetailTemplate = (restaurant) => `
  <article class="detail">
    <center><img src="${
      CONFIG.BASE_IMAGE + restaurant.pictureId
    }" class="detail-img" alt="Gambar ${restaurant.name}"></center>
    <div class="detail-body">
      <h3 class="restaurant-name">${restaurant.name}</h3>
      <h4 class="rating_detail">Rating : <span>${restaurant.rating}</span></h4>
      <h5 class="city_detail">Kota : ${restaurant.city}</h5>
      <div class="address">
        <h6>Alamat Restaurant</h6>
        <p class="desc_addres">${restaurant.address}</p>
      </div>
      <div class="categories">
        <h6>Kategori Restaurant</h6>
        <p class="desc_categories">${restaurant.categories
          .map((item) => item.name)
          .join(' - ')}</p>
      </div>
      <div class="menu_foods">
        <h6>Menu Makanan</h6>
        <p>${restaurant.menus.foods.map((item) => item.name).join(', ')}</p>
      </div>
      <div class="menu_drinks">
        <h6>Menu Minuman</h6>
        <p class="drinks">${restaurant.menus.drinks
          .map((item) => `<small>${item.name}</small>`)
          .join(', ')}</p>
      </div>
      <div class="description">
        <h6>Description</h6>
        <p>${restaurant.description}</p>
      </div>
      <div class="customer-reviews">
        <h6>Customer Reviews</h6>
        ${restaurant.customerReviews
          .map(
            (customer) => `
            <h6>${customer.name}</h6>
            <p>${customer.review}</p>
            <small>${customer.date}</small>
          `,
          )
          .join('')}
      </div>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantsItemTemplate,
  createRestaurantsDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
