const CART_STORAGE_KEY = "secondshape-cart-v1";
const FAVORITES_STORAGE_KEY = "secondshape-favorites-v1";

const PRODUCTS = [
  {
    id: "chair-second-yellow",
    title: "СТУЛ SECOND",
    price: 9999,
    image: "images/shop-card-1.png",
    detailImage: "images/product-detail-1.png",
    backArrow: "images/product-back-yellow.png",
    alt: "Желтый стул на розовом фоне",
    detailPage: "product-chair-second-yellow.html",
    description:
      "лаконичный стул из переработанного пластика с характерной геометрией коллекции second.\n\nматериал: переработанный пластик\nособенности: легкий, влагостойкий, подходит для помещений",
  },
  {
    id: "table-second-purple",
    title: "СТОЛ SECOND",
    price: 9999,
    image: "images/shop-card-2.png",
    detailImage: "images/product-detail-2.png",
    backArrow: "images/product-back-purple.png",
    alt: "Фиолетовый стол на оранжевом фоне",
    detailPage: "product-table-second-purple.html",
    description:
      "компактный круглый стол, вдохновленный простыми конструкциями и яркими цветовыми акцентами.\n\nматериал: переработанный пластик\nособенности: компактный размер",
  },
  {
    id: "armchair-shape-orange",
    title: "КРЕСЛО SHAPE",
    price: 9999,
    image: "images/shop-card-3.png",
    detailImage: "images/product-detail-3.png",
    backArrow: "images/product-back-orange.png",
    alt: "Оранжевый стул на желтом фоне",
    detailPage: "product-armchair-shape-orange.html",
    description:
      "выразительное кресло с графичной архитектурной формой.\n\nматериал: переработанный пластик\nособенности: эргономичная посадка, яркий визуальный образ",
  },
  {
    id: "side-table-green",
    title: "СТОЛИК SS",
    price: 9999,
    image: "images/shop-card-4.png",
    detailImage: "images/product-detail-4.png",
    backArrow: "images/product-back-green.png",
    alt: "Зеленый столик на синем фоне",
    detailPage: "product-side-table-green.html",
    description:
      "небольшой журнальный столик с мягким силуэтом и плавными объемами.\n\nматериал: переработанный пластик\nособенности: скульптурная форма, компактность",
  },
  {
    id: "chair-second-blue",
    title: "СТУЛ SHAPE",
    price: 9999,
    image: "images/shop-card-5.png",
    detailImage: "images/product-detail-5.png",
    backArrow: "images/product-back-blue.png",
    alt: "Синий стул на оранжевом фоне",
    detailPage: "product-chair-second-blue.html",
    description:
      "компактный монолитный стул с округлыми формами.\n\nматериал: переработанный пластик\nособенности: цельная конструкция, плавные линии, подходит для жилых и общественных интерьеров",
  },
  {
    id: "table-second-pink",
    title: "СТОЛ SHAPE",
    price: 9999,
    image: "images/shop-card-6.png",
    detailImage: "images/product-detail-6.png",
    backArrow: "images/product-back-pink.png",
    alt: "Розовый стол на синем фоне",
    detailPage: "product-table-second-pink.html",
    description:
      "универсальный низкий стол с вытянутой прямоугольной столешницей.\n\nматериал: переработанный пластик\nособенности: минималистичный дизайн, универсальное применение",
  },
  {
    id: "shelf-shape-purple",
    title: "ПОЛКА SHAPE",
    price: 9999,
    image: "images/shop-card-7.png",
    detailImage: "images/product-detail-7.png",
    backArrow: "images/product-back-purple.png",
    alt: "Фиолетовая полка на зеленом фоне",
    detailPage: "product-shelf-shape-purple.html",
    description:
      "скульптурная полка с волнообразным силуэтом.\n\nматериал: переработанный пластик\nособенности: три уровня хранения, выразительная форма, каждая полка имеет необычную форму",
  },
  {
    id: "chair-ss-yellow",
    title: "СТУЛ SS",
    price: 9999,
    image: "images/shop-card-8.png",
    detailImage: "images/product-detail-8.png",
    backArrow: "images/product-back-yellow.png",
    alt: "Желтый стул с подлокотниками на розовом фоне",
    detailPage: "product-chair-ss-yellow.html",
    description:
      "монолитное кресло с мягкими округлыми линиями.\n\nматериал: переработанный пластик\nособенности: цельная форма, высокая прочность, влагостойкость",
  },
];

const PRODUCT_MAP = new Map(PRODUCTS.map((product) => [product.id, product]));

function loadJsonArray(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveJsonArray(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadCart() {
  return loadJsonArray(CART_STORAGE_KEY);
}

function saveCart(cart) {
  saveJsonArray(CART_STORAGE_KEY, cart);
}

function loadFavorites() {
  return loadJsonArray(FAVORITES_STORAGE_KEY);
}

function saveFavorites(favorites) {
  saveJsonArray(FAVORITES_STORAGE_KEY, favorites);
}

function formatPrice(value) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

function setupMobileMenu() {
  const header = document.querySelector(".header");

  if (!header) {
    return;
  }

  let menuButton = header.querySelector(".header__menu-button");

  if (!menuButton) {
    menuButton = document.createElement("button");
    menuButton.className = "header__menu-button";
    menuButton.type = "button";
    menuButton.setAttribute("aria-label", "Открыть меню");
    menuButton.innerHTML = "<span></span><span></span><span></span>";
    header.insertBefore(menuButton, header.firstChild);
  }

  let mobileMenu = document.querySelector(".mobile-menu");

  if (!mobileMenu) {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = [
      { href: "index.html", label: "главная" },
      { href: "shop.html", label: "магазин" },
      { href: "game.html", label: "игра" },
      { href: "cart.html", label: "корзина" },
    ];

    mobileMenu = document.createElement("div");
    mobileMenu.className = "mobile-menu";
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.innerHTML = `
      <div class="mobile-menu__backdrop" data-mobile-menu-close></div>
      <div class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Навигация по сайту">
        <button class="mobile-menu__close" type="button" aria-label="Закрыть меню" data-mobile-menu-close>&times;</button>
        <nav class="mobile-menu__nav" aria-label="Мобильное меню">
          ${links
            .map(
              (link) => `
                <a class="mobile-menu__link${currentPage === link.href ? " is-active" : ""}" href="${link.href}">
                  ${link.label}
                </a>
              `
            )
            .join("")}
        </nav>
      </div>
    `;
    document.body.appendChild(mobileMenu);
  }

  const closeElements = mobileMenu.querySelectorAll("[data-mobile-menu-close]");
  const menuLinks = mobileMenu.querySelectorAll(".mobile-menu__link");

  const openMenu = () => {
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("mobile-menu-open");
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("mobile-menu-open");
  };

  menuButton.addEventListener("click", openMenu);
  closeElements.forEach((element) => {
    element.addEventListener("click", closeMenu);
  });
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function hasProductInCart(productId) {
  return loadCart().some((item) => item.id === productId);
}

function isProductFavorite(productId) {
  return loadFavorites().includes(productId);
}

function addToCart(productId) {
  const cart = loadCart();
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: productId,
      quantity: 1,
      favorite: false,
    });
  }

  saveCart(cart);
}

function updateQuantity(productId, delta) {
  const cart = loadCart();
  const item = cart.find((entry) => entry.id === productId);

  if (!item) {
    return;
  }

  item.quantity += delta;

  const nextCart = item.quantity <= 0
    ? cart.filter((entry) => entry.id !== productId)
    : cart;

  saveCart(nextCart);
  renderShopCartIcons();
  renderCartPage();
}

function removeFromCart(productId) {
  const cart = loadCart().filter((item) => item.id !== productId);
  saveCart(cart);
  renderShopCartIcons();
  renderCartPage();
}

function toggleFavorite(productId) {
  const cart = loadCart();
  const item = cart.find((entry) => entry.id === productId);

  if (!item) {
    return;
  }

  item.favorite = !item.favorite;
  saveCart(cart);
  renderCartPage();
}

function toggleProductFavorite(productId) {
  const favorites = loadFavorites();
  const index = favorites.indexOf(productId);

  if (index >= 0) {
    favorites.splice(index, 1);
  } else {
    favorites.push(productId);
  }

  saveFavorites(favorites);
  return favorites.includes(productId);
}

function renderShopCartIcons() {
  const cards = document.querySelectorAll("[data-product-id]");

  if (!cards.length) {
    return;
  }

  const cart = loadCart();

  cards.forEach((card) => {
    const icon = card.querySelector(".catalog-card__cart");

    if (!icon) {
      return;
    }

    const inCart = cart.some((item) => item.id === card.dataset.productId);
    icon.src = inCart
      ? "images/shop-cart-icon-filled.png"
      : "images/shop-cart-icon.png";
  });
}

function setupShopPage() {
  const cards = document.querySelectorAll(".catalog-card[data-product-id]");

  if (!cards.length) {
    return;
  }

  cards.forEach((card) => {
    const product = PRODUCT_MAP.get(card.dataset.productId);
    const addButton = card.querySelector("[data-add-to-cart]");

    if (addButton) {
      addButton.addEventListener("click", (event) => {
        event.stopPropagation();

        if (!product) {
          return;
        }

        if (hasProductInCart(product.id)) {
          removeFromCart(product.id);
          return;
        }

        addToCart(product.id);
        renderShopCartIcons();
      });
    }

    card.addEventListener("click", (event) => {
      if (!product || event.target.closest("[data-add-to-cart]")) {
        return;
      }

      window.location.href = product.detailPage;
    });
  });

  renderShopCartIcons();
}

function renderCartPage() {
  const list = document.querySelector("[data-cart-list]");
  const template = document.querySelector("#cart-item-template");
  const emptyState = document.querySelector("[data-cart-empty]");

  if (!list || !template) {
    return;
  }

  const cart = loadCart().filter((item) => PRODUCT_MAP.has(item.id));
  list.innerHTML = "";

  if (!cart.length) {
    list.hidden = true;
    if (emptyState) {
      emptyState.hidden = false;
    }
    return;
  }

  list.hidden = false;
  if (emptyState) {
    emptyState.hidden = true;
  }

  cart.forEach((item) => {
    const product = PRODUCT_MAP.get(item.id);

    if (!product) {
      return;
    }

    const fragment = template.content.cloneNode(true);
    const article = fragment.querySelector("[data-cart-item]");
    const image = fragment.querySelector("[data-cart-image]");
    const title = fragment.querySelector("[data-cart-title]");
    const price = fragment.querySelector("[data-cart-price]");
    const quantity = fragment.querySelector("[data-cart-quantity]");
    const favorite = fragment.querySelector("[data-cart-favorite]");
    const favoriteImage = favorite.querySelector("img");
    const decrease = fragment.querySelector("[data-cart-decrease]");
    const increase = fragment.querySelector("[data-cart-increase]");
    const remove = fragment.querySelector("[data-cart-remove]");

    article.dataset.productId = product.id;
    image.src = product.image;
    image.alt = product.alt;
    title.textContent = product.title;
    price.textContent = formatPrice(product.price);
    quantity.textContent = String(item.quantity);

    if (item.favorite) {
      favorite.classList.add("is-active");
      favoriteImage.src = "images/cart-heart-filled.png";
    } else {
      favoriteImage.src = "images/cart-heart-outline.png";
    }

    decrease.addEventListener("click", () => {
      updateQuantity(product.id, -1);
    });

    increase.addEventListener("click", () => {
      updateQuantity(product.id, 1);
    });

    favorite.addEventListener("click", () => {
      toggleFavorite(product.id);
    });

    remove.addEventListener("click", () => {
      removeFromCart(product.id);
    });

    list.appendChild(fragment);
  });
}

function setupGamePage() {
  const gamePage = document.querySelector(".game-page");
  const namebar = document.querySelector("[data-namebar]");
  const nameInput = document.querySelector("[data-name-input]");
  const palette = document.querySelector("[data-game-palette]");
  const pieceButtons = Array.from(document.querySelectorAll("[data-game-piece]"));
  const bottleImage = document.querySelector("[data-game-bottle]");
  const resetButton = document.querySelector("[data-game-reset]");
  const confirmButton = document.querySelector("[data-game-confirm]");

  if (!gamePage || !namebar || !nameInput || !palette || !pieceButtons.length || !bottleImage || !resetButton || !confirmButton) {
    return;
  }

  const SHAPE_ITEMS = [
    {
      label: "Первая бутылка",
      thumb: "images/game-bottle-1.png",
      large: "images/game-bottle-large-1.png",
      shapeId: 1,
    },
    {
      label: "Вторая бутылка",
      thumb: "images/game-bottle-2.png",
      large: "images/game-bottle-large-2.png",
      shapeId: 2,
    },
    {
      label: "Третья бутылка",
      thumb: "images/game-bottle-3.png",
      large: "images/game-bottle-large-3.png",
      shapeId: 3,
    },
    {
      label: "Четвертая бутылка",
      thumb: "images/game-bottle-4.png",
      large: "images/game-bottle-large-4.png",
      shapeId: 4,
    },
  ];

  const COLOR_ITEMS = [
    {
      label: "Синяя бутылка",
      thumb: "images/game-color-icon.png",
      colorId: "blue",
      large: {
        1: "images/game-bottle-1-blue.png",
        2: "images/game-bottle-2-blue.png",
        3: "images/game-bottle-3-blue.png",
        4: "images/game-bottle-4-blue.png",
      },
    },
    {
      label: "Розовая бутылка",
      thumb: "images/game-color-icon.png",
      colorId: "pink",
      large: {
        1: "images/game-bottle-1-pink.png",
        2: "images/game-bottle-2-pink.png",
        3: "images/game-bottle-3-pink.png",
        4: "images/game-bottle-4-pink.png",
      },
    },
    {
      label: "Зеленая бутылка",
      thumb: "images/game-color-icon.png",
      colorId: "green",
      large: {
        1: "images/game-bottle-1-green.png",
        2: "images/game-bottle-2-green.png",
        3: "images/game-bottle-3-green.png",
        4: "images/game-bottle-4-green.png",
      },
    },
    {
      label: "Желтая бутылка",
      thumb: "images/game-color-icon.png",
      colorId: "yellow",
      large: {
        1: "images/game-bottle-1-yellow.png",
        2: "images/game-bottle-2-yellow.png",
        3: "images/game-bottle-3-yellow.png",
        4: "images/game-bottle-4-yellow.png",
      },
    },
  ];

  const gameState = {
    stage: "shape",
    shapeId: null,
    colorId: null,
    completed: false,
  };

  const paletteSets = {
    shape: SHAPE_ITEMS,
    color: COLOR_ITEMS,
  };

  function renderPalette() {
    const items = paletteSets[gameState.stage];

    pieceButtons.forEach((button, index) => {
      const item = items[index];
      const img = button.querySelector("img");
      button.setAttribute("aria-label", item.label);
      button.dataset.gameStage = gameState.stage;
      button.dataset.gameIndex = String(index);
      if (img) {
        img.src = item.thumb;
      }
    });
  }

  function currentBottleImage() {
    if (!gameState.shapeId) {
      return "";
    }

    if (!gameState.colorId) {
      return SHAPE_ITEMS[gameState.shapeId - 1].large;
    }

    const colorItem = COLOR_ITEMS.find((item) => item.colorId === gameState.colorId);
    return colorItem ? colorItem.large[gameState.shapeId] : "";
  }

  function renderBottle() {
    const src = currentBottleImage();
    if (!src) {
      bottleImage.classList.remove("is-visible");
      bottleImage.removeAttribute("src");
      delete bottleImage.dataset.shapeId;
      return;
    }

    bottleImage.src = src;
    bottleImage.dataset.shapeId = String(gameState.shapeId);
    bottleImage.classList.add("is-visible");
  }

  function resetGame() {
    gameState.stage = "shape";
    gameState.shapeId = null;
    gameState.colorId = null;
    gameState.completed = false;

    bottleImage.classList.remove("is-visible");
    bottleImage.removeAttribute("src");
    nameInput.disabled = false;
    nameInput.value = "";
    nameInput.placeholder = "придумай название";

    renderPalette();
  }

  function completeGame() {
    gameState.completed = true;
    nameInput.disabled = true;
    nameInput.value = "спасибо за участие!";
    nameInput.placeholder = "";
  }

  function handlePieceClick(index) {
    if (gameState.stage === "shape") {
      const selected = SHAPE_ITEMS[index];
      gameState.shapeId = selected.shapeId;
      gameState.colorId = null;
      gameState.stage = "color";
      renderBottle();
      renderPalette();
      return;
    }

    if (gameState.stage === "color") {
      const selected = COLOR_ITEMS[index];
      gameState.colorId = selected.colorId;
      renderBottle();
    }
  }

  namebar.addEventListener("click", (event) => {
    if (!nameInput.disabled && event.target !== nameInput && event.target !== confirmButton && !confirmButton.contains(event.target)) {
      nameInput.focus();
    }
  });

  pieceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      handlePieceClick(Number(button.dataset.gameIndex || "0"));
    });
  });

  resetButton.addEventListener("click", resetGame);
  confirmButton.addEventListener("click", completeGame);

  renderPalette();
}

function setupProductDetailPage() {
  const detailRoot = document.querySelector("[data-detail-product-id]");

  if (!detailRoot) {
    return;
  }

  const product = PRODUCT_MAP.get(detailRoot.dataset.detailProductId);

  if (!product) {
    return;
  }

  const image = detailRoot.querySelector("[data-detail-image]");
  const backArrow = detailRoot.querySelector(".product-page__back img");
  const title = detailRoot.querySelector("[data-detail-title]");
  const description = detailRoot.querySelector("[data-detail-description]");
  const price = detailRoot.querySelector("[data-detail-price]");
  const addButton = detailRoot.querySelector("[data-detail-add]");
  const favoriteButton = detailRoot.querySelector("[data-detail-favorite]");
  const favoriteImage = favoriteButton ? favoriteButton.querySelector("img") : null;
  const syncAddButton = () => {
    if (!addButton) {
      return;
    }

    const added = hasProductInCart(product.id);
    addButton.classList.toggle("is-added", added);
    addButton.textContent = added ? "товар добавлен" : "в корзину";
  };

  if (image) {
    image.src = product.detailImage;
    image.alt = product.alt;
  }

  if (backArrow) {
    backArrow.src = product.backArrow || "images/product-back-arrow.png";
  }

  if (title) {
    title.textContent = product.title;
  }

  if (description) {
    description.textContent = product.description;
  }

  if (price) {
    price.textContent = formatPrice(product.price);
  }

  syncAddButton();

  if (favoriteButton && favoriteImage) {
    const syncFavorite = () => {
      const active = isProductFavorite(product.id);
      favoriteButton.classList.toggle("is-active", active);
      favoriteImage.src = active
        ? "images/product-heart-filled.png"
        : "images/product-heart-outline.png";
    };

    syncFavorite();

    favoriteButton.addEventListener("click", () => {
      toggleProductFavorite(product.id);
      syncFavorite();
    });
  }

  if (addButton) {
    addButton.addEventListener("click", () => {
      if (!hasProductInCart(product.id)) {
        addToCart(product.id);
      }
      syncAddButton();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupShopPage();
  renderShopCartIcons();
  renderCartPage();
  setupGamePage();
  setupProductDetailPage();
});
