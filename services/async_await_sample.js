// write a function to retrieve a blob of json
// make an ajax requrest! use the fetch function

var url = 'https://rallycoding.herokuapp.com/api/music_albums';

// function fetchAlbum() {
//   fetch(url)
//     .then(res => res.json())
//     .then(json => console.log(json));
// }

var fetchAlbums = async () => {
  const res = await fetch(url);
  console.log('we are not actually waiting here');
  const json = await res.json();
  console.log(json);
};

fetchAlbums();
