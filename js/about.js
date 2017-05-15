function about() {
  console.log('This is the about page!');
  $('h2').text('About');
}

registerPage('about', about);
