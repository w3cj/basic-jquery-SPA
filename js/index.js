$(function() {
  showPage('home');
});

const pageFunctions = {};

function registerPage(name, pageFunction) {
  pageFunctions[name] = pageFunction;
}

$('.page-link').click(function(event) {
  event.preventDefault();
  const name = this.dataset.page;
  $('.active').removeClass('active');
  this.classList.add('active');
  showPage(name);
});

function showPage(name) {
  $('.page').hide();
  $('.' + name + '-page').show();

  pageFunctions[name]();
}
