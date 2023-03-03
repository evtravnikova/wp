let button = document.querySelector('.circle_top')

button.onclick = function () {
  window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function () {
  button.hidden = (pageYOffset < document.documentElement.clientHeight);
});
