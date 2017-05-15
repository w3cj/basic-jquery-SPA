function home() {
  $('h2').text('Home');
  console.log('This is the home page!');
}

registerPage('home', home);
