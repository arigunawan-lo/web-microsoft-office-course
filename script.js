// toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};


// toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// toggle class active untuk search form
const shCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shCart.classList.toggle('active');
  e.preventDefault();
};

// klik diluar elemen
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');



document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }   

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }  

  if (!sc.contains(e.target) && !shCart.contains(e.target)) {
    shCart.classList.remove('active');
  } 
   
});

// modal box
const detailModal = document.querySelector('#item-detail-modal');
const detailButton = document.querySelectorAll('.item-detail-button');

detailButton.forEach((btn) => {
  btn.onclick = (e) => {
    detailModal.style.display = 'flex';
    e.preventDefault();
  }; 
})


// klik tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
  detailModal.style.display = 'none';
  e.preventDefault();
}

// klik diluar modal box
window.onclick = (e) => {
  if (e.target === detailModal) {
    detailModal.style.display = 'none';
  }
}