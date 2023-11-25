const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.email');
const mobileMenu = document.querySelector('.menu-mobile');
const burguerMenu = document.querySelector('.menu-hamburguesa')
const menuCarritoIcon = document.querySelector('.shopping-cart');
const menuCarrito = document.querySelector('.carrito');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleMenuCarrito);

function toggleDesktopMenu() {
  const menuCarritoClosed = menuCarrito.classList.contains('inactive');

  if(!menuCarritoClosed) {
    menuCarrito.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const menuCarritoClosed = menuCarrito.classList.contains('inactive');

  if(!menuCarritoClosed) {
    menuCarrito.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarrito() {
  const menuDesktopOpen = !desktopMenu.classList.contains('inactive');
  const mobileMenuClosed = mobileMenu.classList.contains('inactive');

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
  image: './assets/pexels-pixabay-276517.jpg'
});

productList.push({
  name: 'Book',
  price: 20,
  image: './assets/pexels-pixabay-276517.jpg'
});

productList.push({
  name: 'Desktop',
  price: 300,
  image: './assets/pexels-pixabay-276517.jpg'
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
  productCard.classList.add('product-card')

  // product = {name, price, image} -> product.image
  const img = document.createElement('img');
  img.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-description');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;

  const productInfoFigure = document.createElement('div');
  const productImg = document.createElement('img');
  productImg.setAttribute('src', './assets/bt_add_to_cart.svg');

  productCard.append(img, productInfo);
  productInfo.append(productInfoDiv, productInfoFigure);
  productInfoDiv.append(productPrice, productName);
  productInfoFigure.append(productImg);

}