function search() {
  console.log('This is the search page!');
  $('h2').text('Search');

  $('.results').empty();

  for (var i = 0; i < 20; i++) {
    $('.results').append('<li class="list-group-item">Item ' + i + '</li>')
  }
}

registerPage('search', search);
