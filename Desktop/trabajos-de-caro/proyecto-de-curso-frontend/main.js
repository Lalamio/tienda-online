const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.email');
const mobileMenu = document.querySelector('.menu-mobile');
const burguerMenu = document.querySelector('.menu-hamburguesa')
const menuCarritoIcon = document.querySelector('.shopping-cart');
const menuCarrito = document.querySelector('.carrito');
const cardsContainer = document.querySelector('.cards-container');
const containerDetail = document.querySelector('.product-detail');
const iconoCerrar = document.querySelector('.icon-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleMenuCarrito);
iconoCerrar.addEventListener('click', cerrarProductDetail);

function cerrarProductDetail() {
  containerDetail.classList.add('inactive');
}

function toggleDesktopMenu() {
  const productDetailClosed = containerDetail.classList.contains('inactive');
  const menuCarritoClosed = menuCarrito.classList.contains('inactive');

  if(!menuCarritoClosed) {
    menuCarrito.classList.add('inactive')
  }

  if (!productDetailClosed) {
    containerDetail.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const menuCarritoClosed = menuCarrito.classList.contains('inactive');
  const productDetailClosed = containerDetail.classList.contains('inactive');

  if(!menuCarritoClosed) {
    menuCarrito.classList.add('inactive')
  }

  if (!productDetailClosed) {
    containerDetail.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarrito() {

  const menuDesktopOpen = !desktopMenu.classList.contains('inactive');
  const mobileMenuClosed = mobileMenu.classList.contains('inactive');
  const productDetailClosed = containerDetail.classList.contains('inactive');

  if (!productDetailClosed) {
    containerDetail.classList.add('inactive');
  }

  if (menuDesktopOpen) {
    desktopMenu.classList.add('inactive');
  }

  if(!mobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }

  menuCarrito.classList.toggle('inactive');
}



const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: './assets/pexels-pixabay-276517.jpg',
});

productList.push({
  name: 'Book',
  price: 20,
  image: './assets/pexels-pixabay-276517.jpg',
});

productList.push({
  name: 'Desktop',
  price: 300,
  img: './assets/silla.jpg',
});

{/* <div class="product-card">
      <img class="img-product" src="./assets/pexels-pixabay-276517.jpg" alt="">
      <div class="description">
        <div>
          <p>$120,00</p>
          <p>Bike</p> 
        </div>
        <figure>
          <img src="./assets/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div> */}

for (product of productList) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.style.cursor = 'pointer';
  productCard.addEventListener('click', openProductDetail);

  function openProductDetail() {
  const menuCarritoClosed = menuCarrito.classList.contains('inactive');
    const menuDesktopOpen = !desktopMenu.classList.contains('inactive');

    if (menuDesktopOpen) {
      desktopMenu.classList.add('inactive');
    }

    if (!menuCarritoClosed) {
      menuCarrito.classList.add('inactive');
    }

    containerDetail.classList.remove('inactive');
  }


  // product = {name, price, image} -> product.image
  const productImage = document.createElement('img');
  productImage.setAttribute('src', './assets/silla.jpg');

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-description');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;

  const productInfoFigure = document.createElement('div');
  const productIcon = document.createElement('img');
  productImage.setAttribute('src', './assets/bt_add_to_cart.svg');

  cardsContainer.append(productCard);
  productCard.append(productImage, productInfo);
  productInfo.append(productInfoDiv, productInfoFigure);
  productInfoDiv.append(productPrice, productName);
  productInfoFigure.append(productIcon);

}